const express = require('express')

const nunjucks = require('nunjucks')

const stacks = require('./data')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: true,
    noChache: true
})


server.get('/',(req, res) =>{
    return res.render("about")
})

server.get('/courses',(req, res) =>{
    return res.render("courses", { items: stacks})
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
  
        const courses = stacks.find(function(stack){
            if(stack.id == id){
                return stack;
            }
        })

        if(!courses){
            return res.send("Id not exists")
        }

    return res.render("stack", { item: courses });
  });

server.use(function(req, res) {
    res.status(404).render("not-found");
  });


server.listen(3000, function(){
    console.log('Servidor Iniciado')
})