const LoginM = require('../models/loginM')

module.exports = app => {
    app.get('/login',(req,res)=>{
        res.render('login')
    })
    
    app.post('/add-login', (req,res)=> {
        const body = (JSON.parse(JSON.stringify(req.body)))
        console.log("entrou post")
        console.log(JSON.parse(JSON.stringify(req.body)))
        // res.json(req.body)
        let teste2 = 0
        LoginM.verificaLogin(body,res,teste2)
        

    })


}