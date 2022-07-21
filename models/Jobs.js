//const { Sequelize } = require("../db/connection")
const database = require("../db/connection")

//conecta com as colunas no banco de dados, o primeiro parametro e nome da tabela
const job = database.sequelize.define("jobs",{
    title:{
        type:database.Sequelize.STRING
    },
    salary:{
        type:database.Sequelize.STRING
    },
    company:{
        type:database.Sequelize.STRING
    },
    new:{
        type:database.Sequelize.INTEGER
    },
    


})

module.exports = job