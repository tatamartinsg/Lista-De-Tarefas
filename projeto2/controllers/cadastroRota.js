const Cadastro = require('../models/cadastroM')

module.exports = app => {
    app.get("/cadastro", (req,res)=>{
        res.render('cadastro')
    })

    app.post("/add-cadastro", (req,res) => {
        const cadastro = req.body

        Cadastro.adicionaCadastro(cadastro,res)


        // const obj = Object.assign({},req.body)
        // console.log(obj)
        // console.log(req.body)
        res.redirect('/tarefas')

    })
    
}