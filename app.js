const express = require("express")
const app = express()
const port = 8000

const DataBase = require("./db/connection")

const bodyParser = require("body-parser")

//Banco de Dados
DataBase.sequelize.authenticate().then(()=>{
    console.log("DataBase conectado!")
}).catch((err)=>{
    console.log("Erro na conexão do Banco de dados: " ,err)
})

//body-parser
app.use(bodyParser.urlencoded({extended: false}))

//Rotas
app.get("/", (req,res)=>{
    res.send("Funcionando")
})

app.use('/jobs',require('./routes/jobs'))

app.listen(port,()=>{
    console.log(`SERVER NA PORTA: ${port}`)
})
