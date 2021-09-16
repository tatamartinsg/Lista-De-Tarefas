const Cadastro = require('../models/cadastroM')

module.exports = app => {
    app.get("/cadastro", (req,res)=>{
        res.render('cadastro')
    })

    app.get("/cadastro/:id", (req,res)=> {
        const id = parseInt(req.params.id)
        Cadastro.buscaPorId(id,res)
    })

    app.post("/add-cadastro", (req,res) => {
        const cadastro = req.body
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
            res.redirect('/tarefas')
            Cadastro.adicionaCadastro(cadastro,res)
        }
        
        // const obj = Object.assign({},req.body)
        // console.log(obj)
        // console.log(req.body)
        

    })
    
}