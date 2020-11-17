
const fs = require('fs');

const data = require('../data.json')

const { age, graduation, date } = require('../utils')

exports.index = function(req, res){

  
    return res.render('students/index', { students: data.students })
}

exports.create = function(req, res){
    return res.render("students/create")
}

exports.post = function(req, res){

    const keys = Object.keys(req.body);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        
        if(req.body[key] == ""){
            return res.send(`Preencha todos os campos! Campo não digitado: ${key}`)
        }
    }
    
 

    birth = Date.parse(req.body.birth)
    
    let id = 1

    const lastStudent = data.students[data.students.length - 1]

    if(lastStudent){
        id = lastStudent.id + 1
    }


    data.students.push({
        id,
       ...req.body,
        birth,
       
    })
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect("/students")
    })


}

exports.show = function(req, res){

    const { id } = req.params

    const foundstudent = data.students.find(function(student){
        return student.id == id
    })

    if(!foundstudent){
        return res.send("User not Exists")
    }

    function classYear(){
        const year = foundstudent.schoolYear

        if(year == '5') return '5° ano'
        if(year == '6') return '6° ano'
        if(year == '7') return '7° ano'
        if(year == '8') return '8° ano'
        if(year == '9') return '9° ano'
        if(year == '10') return '1° ano médio'
        if(year == '11') return '2° ano médio'
        if(year == '12') return '3° ano médio'

    }

    const student = {
        ...foundstudent,
        birth: date(foundstudent.birth).birthDay, 
        classYear: classYear(foundstudent.schoolYear) 
    }

    return res.render('students/show', { student })

}

exports.edit = function(req, res){

    const { id } = req.params

    const foundstudent = data.students.find(function(student){
        return student.id == id
    })

    if(!foundstudent){
        return res.send("User not Exists")
    }

    const student = {

        ...foundstudent,
        birth: date(foundstudent.birth).iso,
           
        
    }
    

    return res.render('students/edit', { student })
}

exports.update = function(req, res){
   
    const { id } = req.body
    let index = 0

    const foundId = data.students.find(function(student, foundindex){
        if(student.id == id){
            index = foundindex

            return true
        }
    })

    if(!foundId) return res.send("User not Found")

    const student = {
        ...foundId,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number.parseInt(foundId.id)

    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect(`/students/${id}`)
    })


}

exports.delete = function(req , res){
    
    const { id } = req.body

    const filteredstudent = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filteredstudent

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect("/students")
    })

}