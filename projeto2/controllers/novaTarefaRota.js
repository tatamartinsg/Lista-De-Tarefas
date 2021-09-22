module.exports = app => {
    app.get('/tarefas',(req,res)=>{
        res.render('tarefas')
        console.log("entrou get tarefa")
    })
    app.post('/tarefas/add-tarefas',(req,res)=>{
        console.log("Entrou post tarefas")
        console.log(req.body)
        // ADICIONAR TAREFA NO BANCO DE DADOS




        
        // BOLAR UM JEITO PRA QUANDO CLICAR NOS BOTAO, IDENTIFICAR QUAL TAREFA FOI CLICADA
        // DAR UM SELECT NAS TAREFAS NO BANCO DE DADOS
        // PEGAR O ID DELA

    })

}