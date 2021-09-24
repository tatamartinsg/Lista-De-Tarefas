const Tarefas = require('../models/tarefaM2')

module.exports = app => {
    app.get('/tarefas/:email/:id',(req,res)=>{
        res.render('tarefas', {id: req.params.id})
        // res.json({ id: req.params });
        console.log(req.params)
        
        console.log("entrou get tarefa")
    })
    app.post('/tarefas/add-tarefas/:id',(req,res,next)=>{
        console.log("Entrou post tarefas")
        const id_login = req.params.id
        console.log(id_login)
        Tarefas.adicionaTarefaAoBanco(req.body,res,id_login)
        // ADICIONAR TAREFA NO BANCO DE DADOS
        // next()





        
        // BOLAR UM JEITO PRA QUANDO CLICAR NOS BOTAO, IDENTIFICAR QUAL TAREFA FOI CLICADA
        // DAR UM SELECT NAS TAREFAS NO BANCO DE DADOS
        // PEGAR O ID DELA

    })

    app.get('/status/:id/:click',(req,res,next)=>{
        console.log("Entrou GET status")
        console.log('click: ',req.params.click)
        console.log('get id:',req.params.id)
        let qntd_click = req.params.click
        const getId = req.params.id
        Tarefas.selecionaTarefaPorId(getId,qntd_click)

        res.json()
    })


    app.get('/delete/:id', (req,res,next)=>{
        console.log("Entrou GET delete")
        const getIdDelete = req.params.id
        Tarefas.deleteTask(getIdDelete)
        res.json()
    })
}