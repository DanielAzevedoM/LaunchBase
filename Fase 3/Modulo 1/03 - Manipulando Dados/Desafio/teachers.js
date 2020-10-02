const fs = require('fs');

const data = require('./data.json')

exports.post = function(req, res){

    const keys = Object.keys(req.body);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        
        if(req.body[key] == ""){
            return res.send(`Preencha todos os campos! Campo não digitado: ${key}`)
        }
    }
    
    let {avatar_url, name, birth, schooling, typeclass, attendance} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()


    data.instructors.push({
        avatar_url,
        name,
        birth,
        schooling,
        typeclass,
        attendance,
        created_at
    })
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect("/teachers")
    })


}