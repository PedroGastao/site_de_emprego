const express = require("express")
const app = express()
const port = 8000

const DataBase = require("./db/connection")

const bodyParser = require("body-parser")

const Hbars = require("express-handlebars")
const path = require('path')

//Banco de Dados
DataBase.sequelize.authenticate().then(()=>{
    console.log("DataBase conectado!")
}).catch((err)=>{
    console.log("Erro na conexão do Banco de dados: " ,err)
})
//static folder
app.use(express.static(path.join(__dirname, 'public')))

//body-parser
app.use(bodyParser.urlencoded({extended: false}))

//handlebars
app.set('views',path.join(__dirname, 'views'))
app.engine('handlebars', Hbars.engine({defaultLayoutx: 'main'}))
app.set('view engine', 'handlebars')

//Rotas
app.get("/", (req,res)=>{
    res.render('index')
})

app.use('/jobs',require('./routes/jobs'))

app.listen(port,()=>{
    console.log(`SERVER NA PORTA: ${port}`)
})
