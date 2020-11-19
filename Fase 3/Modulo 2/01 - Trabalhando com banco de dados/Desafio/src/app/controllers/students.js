const { age, graduation, date } = require('../lib/utils')


module.exports = {
    index: function(req, res){
  
        return res.render('students/index')
    },
    create: function(req, res){
        
        return res.render("students/create")
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
     
    
        return res.render('students/show')
    
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


