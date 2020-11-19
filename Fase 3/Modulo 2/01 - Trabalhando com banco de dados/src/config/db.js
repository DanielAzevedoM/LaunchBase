const { Pool } = require("pg")

module.exports = new Pool({
    user: 'mayk',
    password:"docker",
    host: "localhost",
    port: 5432,
    database: "gymmanager"
})

