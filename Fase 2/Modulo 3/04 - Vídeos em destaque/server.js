const express = require('express')
const nunjucks = require('nunjucks')

const videos = require('./data')

const server = express();
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
    
})

server.get("/", (req, res) => {
    const about = {
        avatar_url: "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/0/a/9/1/0a91382b3a3dbdfbfed2b871796c40ea.jpg",
        name: "Daniel Azevêdo",
        role: "Aluno da rocketseat",
        description: 'Progamador Full-Stack, em busca de conhecimento! Colaborador da <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>.',
        links: [
            { name: "Github", url: "https://github.com/DanielAzevedoM"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/daniel-azev%C3%AAdo-123193196/"}
        ]
    }
    return res.render("about", {about: about})
})

server.get("/portfolio", (req, res) => {
    return res.render("portfolio", {items: videos})
})

server.listen(3000, function(){
    console.log('Servidor Iniciado!')
})