const { age, date } = require('../../lib/utils')


module.exports = {
    index(req, res) {
        return res.render('instructors/index', { instructors: data.instructors })
    },
    show(req, res) {
        return
    },
    create(req, res) {
        return res.render("instructors/create")
    },
    post(req, res) {

        const keys = Object.keys(req.body)

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];

            if (req.body[key] == "") {
                return res.send(`Preencha todos os campos! Campo em branco: ${key}`)
            }
        }

        let { avatar_url, name, birth, gender, services } = req.body


        return
    },
    edit(req, res) {
        const { id } = req.params

        const foundInstructor = data.instructors.find(function (instructor) {
            return instructor.id == id
        })

        if (!foundInstructor) return res.send("Instructor not found")

        const instructor = {
            ...foundInstructor,
            birth: date(foundInstructor.birth).iso

        }
        return res.render('instructors/edit', { instructor })
    },
    put(req, res) {

        const { id } = req.body
        let index = 0

        const foundInstructor = data.instructors.find(function (instructor, foundIndex) {
            if (instructor.id == id) {
                index = foundIndex
                return true
            }
        })

        if (!foundInstructor) return res.send("Instructor not found")

        const keys = Object.keys(req.body)

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];

            if (req.body[key] == "") {
                return res.send(`Preencha todos os campos! Campo em branco: ${key}`)
            }
        }


    },
    delete(req, res) {
        return

    },

}

