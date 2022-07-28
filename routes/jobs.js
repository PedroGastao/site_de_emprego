const express = require('express')
const router = express.Router()
const job = require('../models/Jobs')

router.get('/add',(req,res)=>{
    res.render('add')
})

router.post('/add', (req,res)=>{
    
    let {title, salary, company, description, email, new_job } = req.body
    
    job.create({
        title,
        salary,
        company,
        description,
        email,
        new_job
    }).then(()=> res.redirect("/")).catch(err => console.log(err))
})



module.exports = router