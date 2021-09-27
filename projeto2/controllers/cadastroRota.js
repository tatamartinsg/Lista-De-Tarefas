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
        
        console.log(JSON.parse(JSON.stringify(req.body)))
        // console.log(JSON.parse(JSON.stringify(req.body)))
        const cadastro = JSON.parse(JSON.stringify(req.body))
            //confere se tem esse email e senha no select do banco de dados
            //se nao tiver, cadastra, se tiver, dê mensagem de erro falando que ja existe!
        Cadastro.verificaCadastro(cadastro,res)
        
        // const obj = Object.assign({},req.body)
        // console.log(obj)
        // console.log(req.body)
        

    })
    
}