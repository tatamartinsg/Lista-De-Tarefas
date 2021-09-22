const Cadastro = require('../models/cadastroM')

module.exports = app => {
    app.get('/', (req,res)=>{
        res.render('escolha')
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
        const emaill = req.body.email
        const senha = req.body.password
        var erros = []

        if ((!req.body.email|| typeof req.body.email == undefined || req.body.email == null) && (!senha|| typeof senha == undefined || senha == null)){
            erros.push({
                text:"Email e Senha inválidos, pois os campos estão vazios!"
            })
        }
        else if((!req.body.email|| typeof req.body.email == undefined || req.body.email == null)){
            erros.push({
                text:"Email inválido, pois está vazio!"
            })
        }
        else if(!senha|| typeof senha == undefined || senha == null){
            erros.push({
                text:"Senha inválida, pois está vazia!"
            })
         
        }
        else if(req.body.password.length < 5){
            erros.push({
                text:"Senha inválida, deve ter no mínimo 5 caracteres!"
            })
        }
        if(erros.length > 0 ){
            res.render("cadastro", {erros: erros})
        }
        else{
            //confere se tem esse email e senha no select do banco de dados
            //se nao tiver, cadastra, se tiver, dê mensagem de erro falando que ja existe!

            Cadastro.verificaCadastro(cadastro,res)
            
            
            // Cadastro.adicionaCadastro(cadastro,res)
            // res.redirect('/tarefas')
        }
        
        // const obj = Object.assign({},req.body)
        // console.log(obj)
        // console.log(req.body)
        

    })
    
}