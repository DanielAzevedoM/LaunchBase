const { age, graduation, date } = require('../lib/utils')


module.exports = {
    index: function(req, res){
  
        return res.render('teachers/index')
    },
    create: function(req, res){
        
        return res.render("teachers/create")
    },
    post: function(req, res){

        const keys = Object.keys(req.body);
    
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            
            if(req.body[key] == ""){
                return res.send(`Preencha todos os campos! Campo não digitado: ${key}`)
            }
        }
        return
    
    },
    show: function(req, res){
 
        
     
    
        return res.render('teachers/show')
    
    }
    ,
    edit: function(req, res){
            
        return 
    },
    update: function(req, res){
   
     return
    
    },
    delete: function(req , res){
        return
    }
}


