const express = require('express')

const nunjucks = require('nunjucks')

const { urlencoded } = require('express');

const routes = require('./routes.js')

const server = express();

nunjucks.configure("views",{
    
    express: server,
    autoescape: false,
    noCache: true,

})

server.use(urlencoded({ extended: true }))
server.set("view engine", "njk")
server.use(express.static('public'))
server.use(routes)

server.listen(3000, function(){
    console.log("Servidor Iniciado!")
})