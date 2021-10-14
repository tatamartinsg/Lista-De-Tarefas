const Tarefas = require('../models/tarefaM2')
const deleteTask = require('../bd/deleteTask')

module.exports = app => {
    app.get('/tarefas/:email/:id',(req,res)=>{
        res.render('tarefas', {id: req.params.id})
    })
    app.post('/tarefas/add-tarefas/:id',(req,res,next)=>{
        const id_login = req.params.id
        Tarefas.insertCodigoCadastro(id_login,req.body,res)
        // Tarefas.adicionaTarefaAoBanco(req.body,res,id_login)
    })
    app.get('/status/:id/:click',(req,res,next)=>{
        let qntd_click = req.params.click
        const getId = req.params.id
        Tarefas.changeStatusTask(getId,qntd_click)
        res.json()
    })
    app.get('/delete/:id', (req,res,next)=>{
        const getIdDelete = req.params.id
        deleteTask(getIdDelete)
        res.json()
    })
}