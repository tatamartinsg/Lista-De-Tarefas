const Tarefa = require('../models/tarefaM')
const Cadastro = require('../models/cadastroM')
const cadastroRota = require('./cadastroRota')
const { teste } = require('../models/tarefaM')

module.exports = app => {

    app.get("/tarefas", (req,res)=>{
        res.render('tarefas')
    })

    app.post("/add-tarefa",(req,res)=>{
        const tarefa = req.body.tarefaUM
        var i = 0;
        console.log(i++)

        // console.log(pemail)
        // console.log("Tarefa inserida:", tarefa)

        // Tarefa.lista(res)
        // Tarefa.buscaPorId(tarefa,id)
        
        // // Tarefa.adicionaTarefa(tarefa,res)
        // console.log('req body:',req.body.tarefaUM)
        console.log(`tarefa adicionada`)
        console.log(tarefa)
        teste(tarefa)
    })
}