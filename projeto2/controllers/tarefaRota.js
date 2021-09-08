module.exports = app => {

    app.get("/tarefas", (req,res)=>{
        res.render('tarefas')
    })

    app.post("/tarefas",(req,res)=>{
        console.log(req.body)
        console.log(`tarefa adicionada`)
    })
}