
const fs = require('fs');

const data = require('../data.json')

const { age, graduation, date } = require('../utils')

exports.index = function(req, res){

  

    return res.render('teachers/index', { teachers: data.teachers })
}

exports.create = function(req, res){
    return res.render("teachers/create")
}

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
    const id = data.teachers.length + 1


    data.teachers.push({
        id,
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

exports.show = function(req, res){

    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher){
        return res.send("User not Exists")
    }

    const teacher = {
        ...foundTeacher,
        birth: age(foundTeacher.birth),
        schooling: graduation(foundTeacher.schooling),
        attendance: foundTeacher.attendance.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
    }

    return res.render('teachers/show', { teacher })

}

exports.edit = function(req, res){

    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher){
        return res.send("User not Exists")
    }

    const teacher = {

        ...foundTeacher,
        birth: date(foundTeacher.birth).iso,
        attendance: foundTeacher.attendance.split(","),    
        
    }
    

    return res.render('teachers/edit', { teacher })
}

exports.update = function(req, res){
   
    const { id } = req.body
    let index = 0

    const foundId = data.teachers.find(function(teacher, foundindex){
        if(teacher.id == id){
            index = foundindex

            return true
        }
    })

    if(!foundId) return res.send("User not Found")

    const teacher = {
        ...foundId,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number.parseInt(foundId.id)

    }

    data.teachers[index] = teacher

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect(`/teachers/${id}`)
    })


}

exports.delete = function(req , res){
    
    const { id } = req.body

    const filteredTeacher = data.teachers.filter(function(teacher){
        return teacher.id != id
    })

    data.teachers = filteredTeacher

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect("/teachers")
    })

}
