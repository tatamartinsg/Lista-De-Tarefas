const Cadastro = require('../models/cadastroM')
const Tarefa = require('../models/tarefaM')

module.exports = app => {
    app.get("/cadastro", (req,res)=>{
        Cadastro.lista(res)
        res.render('cadastro')
    })

    app.get("/cadastro/:id", (req,res)=> {
        const id = parseInt(req.params.id)

        Cadastro.buscaPorId(id,res)
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