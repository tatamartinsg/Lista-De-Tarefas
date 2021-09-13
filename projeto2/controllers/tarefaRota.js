const { deleteTask } = require('../models/tarefaM')
const TarefaM = require('../models/tarefaM')

module.exports = app => {

    app.get("/tarefas", (req,res)=>{
        res.render("tarefas")
        
    })
    // app.get("/add-tarefa/:id"), (req,res) => {

    // }
 
    app.post("/tarefas/add-tarefa2", (req,res)=>{
       const pegaTarefaClicada = req.body.tarefaUM
       const idDoBotao = req.body.idBotao
       const idPosicaoDaTarefa = req.body.idPosicaoTarefa        
       console.log("Posicao da tarefa:", idPosicaoDaTarefa)
    //    console.log(pegaTarefaClicada )
       // if value do botao for = 0, delete a tarefa
       // if value do botao for = 1, mude os status da tarefa!
    //    console.log(req.body.idBotao)
        if (idDoBotao == 0){
            // console.log(req.body.idBotao.id)
            deleteTask(pegaTarefaClicada,idPosicaoDaTarefa)
        }
        else if (idDoBotao == 1){
            console.log(`concluido a tarefa ${pegaTarefaClicada}`)
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
            pega_tarefa = req.body.tarefaUM
            var teste = req.session.tarefaUM
            req.session.tarefaUM= req.param('tarefaUM')
            console.log(`tarefa adicionada`)
            TarefaM.teste(pega_tarefa)
        }

        

        // teste(tarefa)
    })
}