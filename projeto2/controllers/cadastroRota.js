const Cadastro = require('../models/cadastroM')

module.exports = app => {
    app.get('/', (req,res)=>{
        res.render('home')
        //verificar se a pessoa clicou no botao LOGIN ou CADASTRO e redirecionar as páginas
    
    })
    app.get("/cadastro", (req,res)=>{
        res.render('cadastro')
    })

    app.get("/cadastro/:id", (req,res)=> {
        const id = parseInt(req.params.id)
        Cadastro.buscaPorId(id,res)
    })

    app.post("/add-cadastro", (req,res) => {
        const cadastro = JSON.parse(JSON.stringify(req.body))
        Cadastro.verificaCadastro(cadastro,res)
    })
}