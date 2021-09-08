const Tarefa = require('../models/tarefaM')
const Cadastro = require('../models/cadastroM')

module.exports = app => {

    app.get("/tarefas", (req,res)=>{
        res.render('tarefas')
    })

    app.post("/tarefas",(req,res)=>{
        const tarefa = req.body.tarefaUM
        console.log("Tarefa inserida:", tarefa)

        // Tarefa.lista(res)
        Tarefa.buscaPorId(tarefa,id)
        
        // // Tarefa.adicionaTarefa(tarefa,res)
        // console.log('req body:',req.body.tarefaUM)
        console.log(`tarefa adicionada`)
    })
}