const Sequelize = require("sequelize")

const sequelize = new Sequelize("site_vagas", "root", "Kuahku10#",{
    host:"localhost",
    dialect:"mysql",
    storage:"./db/app.idb"
})

module.exports = sequelize