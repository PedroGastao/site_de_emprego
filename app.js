const express = require("express")
const app = express()
const port = 8000

const DataBase = require("./db/connection")

//Banco de Dados
DataBase.authenticate().then(()=>{
    console.log("DataBase conectado!")
}).catch((err)=>{
    console.log("Erro na conexão do Banco de dados: " ,err)
})

//Rotas
app.get("/", (req,res)=>{
    res.send("Funcionando")
})

app.listen(port,()=>{
    console.log(`SERVER NA PORTA: ${port}`)
})
