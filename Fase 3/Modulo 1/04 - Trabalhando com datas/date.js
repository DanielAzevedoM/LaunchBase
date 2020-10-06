
//1602720000000

function age(timestamp){

    const today = new Date()

    const birthDate = new Date(timestamp)

   let age = today.getFullYear() - birthDate.getFullYear()

   const month = today.getMonth() - birthDate.getMonth()

 


   if(month < 0 || month == 0 && today.getDate() < birthDate.getDate()){
       age = age - 1
   }

   return age
}


// 2019 - 1984 = 35

//11 - 12 = -1

//11 -11 = 0

//11 - 10 = 1

//01 - 12 = -11

//12 - 12 = 0

// 13 - 12 = 1
