
const fs = require('fs')

const data = require('./data.json')

const { age, date } = require('./utils')

exports.show = function(req, res){

    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if(!foundInstructor) return res.send("Instructor not found")


    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created: new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(foundInstructor.created_at),
        
    }

    return res.render("instructors/show", { instructor })
}

exports.post = function(req, res){
   
    
    const keys = Object.keys(req.body)

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        
        if(req.body[key] == ""){
            return res.send(`Preencha todos os campos! Campo em branco: ${key}`)
        }
    }

    let { avatar_url, name, birth, gender, services} = req.body

    birth = Date.parse(birth)
    const id = Number(data.instructors.length + 1)
    const created_at = Date.now()

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at,
    })

     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
         if(err) return res.send("Write file error")

         return res.render("instructors/index")
     }) 

}

exports.edit = function(req, res){

    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if(!foundInstructor) return res.send("Instructor not found")

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth)

    }
    return res.render('instructors/edit', { instructor })
}