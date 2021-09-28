const Tarefas = require('../models/tarefaM2')

module.exports = app => {
    app.get('/tarefas/:email/:id',(req,res)=>{
        res.render('tarefas', {id: req.params.id})
    })
    app.post('/tarefas/add-tarefas/:id',(req,res,next)=>{
        const id_login = req.params.id
        Tarefas.adicionaTarefaAoBanco(req.body,res,id_login)
        // ADICIONAR TAREFA NO BANCO DE DADOS
        // next()
        // BOLAR UM JEITO PRA QUANDO CLICAR NOS BOTAO, IDENTIFICAR QUAL TAREFA FOI CLICADA
        // DAR UM SELECT NAS TAREFAS NO BANCO DE DADOS
        // PEGAR O ID DELA

    })
    app.get('/status/:id/:click',(req,res,next)=>{
        let qntd_click = req.params.click
        const getId = req.params.id
        Tarefas.selecionaTarefaPorId(getId,qntd_click)
        res.json()
    })
    app.get('/delete/:id', (req,res,next)=>{
        const getIdDelete = req.params.id
        Tarefas.deleteTask(getIdDelete)
        res.json()
    })
}