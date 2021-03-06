const express = require('express')

const instructors = require('./instructors')

const routes = express.Router();

routes.get('/', function(req, res){
    return res.redirect("/instructors")
})

routes.get('/instructors', instructors.index)

routes.get('/instructors/create', function(req, res){
    return res.render("instructors/create")
})

routes.get('/instructors/:id', instructors.show)

routes.get('/instructors/:id/edit', instructors.edit)

routes.get('/members', function(req, res){
    return res.send("members")
})

routes.post('/instructors', instructors.post)

routes.put('/instructors', instructors.put)

routes.delete('/instructors', instructors.delete)

module.exports = routes;