const LoginM = require('../models/login/verificaLogin/verifyLogin.js')

module.exports = app => {
    app.get('/login',(req,res)=>{
        res.render('login')
    })
    
    app.post('/add-login', (req,res)=> {
        const body = (JSON.parse(JSON.stringify(req.body)))
        LoginM.verificaLogin(body,res)

    })


}