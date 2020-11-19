

const { age, date } = require('../../lib/utils')



module.exports = {
    index(req, res) {
        return res.render('members/index')
    },
    show(req, res) {
        return
    },
    create(req, res) {
        return res.render("members/create")
    },
    post(req, res) {

        const keys = Object.keys(req.body)

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];

            if (req.body[key] == "") {
                return res.send(`Preencha todos os campos! Campo em branco: ${key}`)
            }
        }


        return
    },

    edit(req, res) {
        return
    },
    put(req, res) {
        const { id } = req.body
        let index = 0

        const foundMember = data.members.find(function (member, foundIndex) {
            if (member.id == id) {
                index = foundIndex
                return true
            }
        })

        if (!foundMember) return res.send("Instructor not found")


        const keys = Object.keys(req.body)


        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];

            if (req.body[key] == "") {
                return res.send(`Preencha todos os campos! Campo em branco: ${key}`)
            }
        }
        return
    },
    delete(req, res) {
        return
    },

}

