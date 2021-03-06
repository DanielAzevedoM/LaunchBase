const express = require('express')

const teachers = require('./teachers')

const routes = express.Router()

routes.get("/", function(req, res){
    return res.redirect("/teachers")
})

routes.get("/teachers", teachers.index)

routes.get("/teachers/create", function(req, res){
    return res.render("teachers/create")
})

routes.get('/teachers/:id', teachers.show)

routes.get('/teachers/:id/edit', teachers.edit)

routes.post("/teachers", teachers.post)

routes.put("/teachers", teachers.update)

routes.delete("/teachers", teachers.delete)

routes.use(function(err, res){
    return res.json({ message: "PAGE NOT FOUND"})
})

module.exports = routes;