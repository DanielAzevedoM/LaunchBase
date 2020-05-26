//padronização de codigo
const classA = [
  {
    name: "Mayk",
    grade: 4
  },
  {
    name: "Diego",
    grade: 4
  },
  {
    name: "Fulano",
    grade: 2
  }
]

const classB = [
  {
    name: "Cleiton",
    grade: 10
  },
  {
    name: "Robson",
    grade: 5
  },
  {
    name: "Siclano",
    grade: 2
  },
  {
    name: "student",
    grade: 5
  }
]

function calculateAverage(students) {
  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;

  }
  const average = sum / 3

  return average
}


function sendMessage(students, average, turma) {
  if (average < 5) {
    return console.log(`${turma} average: ${average}.`)
  } else if (average > 5) {
    return console.log(`${turma} average: ${average}, congrats!`)
  } else if (average == 5) {
    return console.log(`${turma} average = ${average}, congrats!.`)
  }
}


function markAsFlunked(student) {
  student.flunked = false;

  if (student.grade < 5) {
    student.flunked = true
  }
}

function sendMessageFlunked(student) {
  if (student.flunked) {
    console.log(`The student ${student.name} is flunked!`)
  }
}

function studentsFlunked(students) {
  for (let student of students) {
    markAsFlunked(student)
    sendMessageFlunked(student)
  }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(classA, average1, 'A')
sendMessage(classB, average2, 'B')

studentsFlunked(classA)
studentsFlunked(classB)

