const Cadastro = require('../models/cadastroM')
const { pegaId } = require('../models/tarefaM')
const Tarefa = require('../models/tarefaM')

module.exports = app => {
    app.get("/cadastro", (req,res)=>{
        // Cadastro.lista(res)
        res.render('cadastro')
    })

    app.get("/cadastro/:id", (req,res)=> {
        const id = parseInt(req.params.id)
        Cadastro.buscaPorId(id,res)
    })

    app.post("/add-cadastro", (req,res) => {
        const cadastro = req.body
        
        console.log("post cadastro: ", req.body.email)
        var teste = req.session.email
        req.session.email = req.param('email')
        console.log('email:',req.session.email)
        console.log(req.session.id)
        Cadastro.adicionaCadastro(cadastro,res)
        
        


        // const obj = Object.assign({},req.body)
        // console.log(obj)
        // console.log(req.body)
        res.redirect('/tarefas')

    })
    
}