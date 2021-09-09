const TarefaM = require('../models/tarefaM')

module.exports = app => {

    app.get("/tarefas", (req,res)=>{
        res.render('tarefas')
    })

    app.post("/add-tarefa",(req,res)=>{
        const tarefa = req.body.tarefaUM
        var i = 0;
        console.log(i++)
        console.log(`tarefa adicionada`)
        console.log(tarefa)
        TarefaM.teste(tarefa)
        // teste(tarefa)
    })
}