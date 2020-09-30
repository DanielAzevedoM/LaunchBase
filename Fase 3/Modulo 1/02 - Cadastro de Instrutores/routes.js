const express = require('express')

const routes = express.Router();

routes.get('/', function(req, res){
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req, res){
    return res.render("instructors/index")
})

routes.get('/instructors/create', function(req, res){
    return res.render("instructors/create")
})

routes.get('/members', function(req, res){
    return res.send("members")
})

routes.post('/instructors', function(req, res){
    
    const keys = Object.keys(req.body)

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        
        if(req.body[key] == ""){
            return res.send(`Preencha todos os campos! Campo em braco: ${key}`)
        }
    }

    return res.send(req.body)
})



module.exports = routes;