const { timeStamp } = require('console');
const fs = require('fs')

const data = require('./data.json')

exports.post = function(req, res){
    
    const keys = Object.keys(req.body)

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        
        if(req.body[key] == ""){
            return res.send(`Preencha todos os campos! Campo em branco: ${key}`)
        }
    }

    let { avatar_url, birth, name, services, gender} = req.body
    
    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

   
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        created_at,
        services,
        gender
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error!")

        return res.redirect("/instructors")
    })
    
    return res.send(req.body)
}