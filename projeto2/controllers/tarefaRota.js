const TarefaM = require('../models/tarefaM')
const session = require('express-session')
const { create } = require('express-handlebars')

const crypto = require('crypto');

module.exports = app => {

    app.get("/tarefas", (req,res)=>{
        console.log(req.session)
        res.render("tarefas")   
    })
    app.get("/tarefas/add-tarefa", (req,res)=> {
        console.log("TA NO GET")
        console.log(req.session)
    })
    app.post("/tarefas/add-tarefa2", (req,res)=>{
        console.log(req.body)
       const pegaTarefaClicada = req.body.tarefaUM
       console.log(req.sessionID)
    //    var teste = req.session.tarefaUM
    //     req.session.tarefaUM = req.param('tarefaUM')
       const idDoBotao = req.body.idBotao

    //    const idPosicaoDaTarefa = req.body.idPosicaoTarefa        
    //    console.log("Posicao da tarefa:", idPosicaoDaTarefa)
       // if value do botao for = 0, delete a tarefa
       // if value do botao for = 1, tarefa concluida, se igual a 2, tarefa nao concluida
    //    console.log(req.body.idBotao)
    console.log('req:',req.session.id)
        if (idDoBotao == 0){
            // console.log(req.body.idBotao.id)
            TarefaM.deleteTask(pegaTarefaClicada)
        }
        else if (idDoBotao == 1){
            console.log(`concluido a tarefa ${pegaTarefaClicada}`)
            TarefaM.alteraStatusConcluirTask(pegaTarefaClicada)
        }
        else if (idDoBotao == 2){
            console.log(`tarefa ${pegaTarefaClicada} desfeita`)
            TarefaM.alteraStatusTaskDesfeita(pegaTarefaClicada)
        }
    })

    app.post("/tarefas/add-tarefa",(req,res)=>{
        var count = 0
        count++
        console.log(count)
        var erros = []
        if(!req.body.tarefaUM || typeof req.body.tarefaUM == undefined || req.body.tarefaUM == null){
            erros.push({
                texto: "Tarefa vazia!"
            })
        }
        if (erros.length > 0){
            res.render("tarefas",{erros: erros})
        }
        else{
                        
            // var generate_key = function() {
            //     // 16 bytes is likely to be more than enough,
            //     // but you may tweak it to your needs
            //     return crypto.randomBytes(16).toString('base64');
            // };
            // console.log(generate_key())
            
            pega_tarefa = req.body.tarefaUM
            var teste = req.session.tarefaUM
            req.session.tarefaUM = req.param('tarefaUM')
            console.log(`tarefa adicionada`)

            teste2 = 'oi'
            
    
            console.log('req:',req.session)
            console.log('id:',req.session.id)
            console.log(req.sessionID)


            TarefaM.adicionaTarefaBanco(req.param('tarefaUM'),req.session.id)

            
            
        }

    })
}