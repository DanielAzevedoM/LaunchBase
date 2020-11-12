module.exports = {

    age: function age(timestamp){

        const today = new Date()
        const birthDate = new Date(timestamp)
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
    
        if(month < 0 || month == 0 && today.getDate() < birthDate.getDate()){
            age = age - 1
        }
    
       return age
    },

    graduation: function(graduation){

        if(graduation == "Ensino Médio Completo"){
            return "Medio"
        } else if( graduation == "Ensino Superior Completo"){
            return "Superior"
        } else {
            return "Doutorado"
        }

    },

    date: function(timestamp){
        const date = new Date(timestamp)

        const year = `0${date.getUTCFullYear()}`.slice(-4)
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }
}