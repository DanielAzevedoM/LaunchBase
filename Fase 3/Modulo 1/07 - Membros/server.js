
const express = require('express')

const nunjucks = require('nunjucks')

const methoedOverride = require('method-override')

const routes = require('./routes')

const server = express();

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(methoedOverride('_method'))
server.use(routes)


server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
    
})


server.listen(3000, function(){
    console.log('Servidor Iniciado!')
})