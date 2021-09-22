// const TarefaM = require('../models/tarefaM')


// module.exports = app => {
//     app.get("/tarefas", (req,res)=>{
//         console.log(req.session)
//         res.render("tarefas")   
//     })
//     app.get("/tarefas/add-tarefa/:id", (req,res)=> {
//         const id = parseInt(req.params.id)
//         console.log(id)
//         console.log(req.params)
//         TarefaM.buscaPorId(id,res)
//     })
//     app.get("/tarefas/add-tarefa2/:id", (req,res)=> {
//         const id = parseInt(req.params.id)
//         console.log(id)
//         console.log(req.params)
//         TarefaM.buscaPorId(id,res)
//     })
//     app.post("/tarefas/add-tarefa2", (req,res)=>{
    
//        const pegaTarefaClicada = req.body.tarefaUM
//        const id_aleatorio = req.body.id_aleatorio
       

//        const idDoBotao = req.body.idBotao
//        console.log("id do botao: ",idDoBotao)

//        const posicaoTarefa = req.body.idPosicaoTarefa 
//        console.log(pegaTarefaClicada)

//        // if value do botao for = 0, delete a tarefa
//        // if value do botao for = 1, tarefa concluida, se igual a 2, tarefa nao concluida

//         if (idDoBotao == 0){
//             TarefaM.deleteTask(pegaTarefaClicada,posicaoTarefa,id_aleatorio)
//         }
//         else if (idDoBotao == 1){
//             console.log(`concluido a tarefa ${pegaTarefaClicada}`)
//             TarefaM.alteraStatusConcluirTask(pegaTarefaClicada,id_aleatorio)
//         }
//         else if (idDoBotao == 2){
//             console.log(`tarefa ${pegaTarefaClicada} desfeita`)
//             TarefaM.alteraStatusTaskDesfeita(pegaTarefaClicada,id_aleatorio)
//         }
//     })

//     app.post("/tarefas/add-tarefa",(req,res)=>{
//         // var generate_key = function() {
//         //     // 16 bytes is likely to be more than enough,
//         //     // but you may tweak it to your needs
//         //     return crypto.randomBytes(16).toString('base64');
//         // };
//         // console.log(generate_key())
         
//         pega_tarefa = req.body.tarefaUM
//         var teste = req.session.tarefaUM
//         req.session.tarefaUM = req.param('tarefaUM')
//         console.log(`tarefa adicionada`)

//         // TarefaM.adicionaTarefaBanco(req.param('tarefaUM'),req.session.id,req.body.id_random)

//     })
// }