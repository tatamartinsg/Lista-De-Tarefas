const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const cadastro = require("./models/Cadastro")
const mandarTarefa = require("./models/MandarTarefa")
const { sequelize } = require("./models/bancoDeDados")
// const mandaTarefa = require("./models/MandarTarefa")

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine','handlebars')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// app.use(express.static(path.join(__dirname,'/public')))
app.use(express.static('public'));

//Rotas
app.get('/tarefas', (req,res)=>{
    res.render('tarefas')
})
app.get('/cadastro', (req,res)=>{
    res.render('cadastro')
})
// app.get('/add-cadastro', (req,res)=>{
//     res.render('cadastro')
// })

app.post('/add-cadastro', (req,res)=>{
    cadastro.create({
        email: req.body.email,
        password: req.body.password,
        ftarefa: req.body.ftarefa
    }).then(()=>{
        //PARA REDIRECIONAR ASSIM QFIZER O CADASTRO PARA OUTRA PAGINA USA=SE:
        res.redirect('/tarefas')
        console.log("Cadastro realizado com sucesso!")
    }).catch((erro)=>{
        console.log("ERRO: Cadastro não foi realizado add-cadastro! "+erro)
    })
   // res.send("Email: "+req.body.email+"<br> Password: "+req.body.password)
})
app.post('/tarefas',(req,res)=>{
    // res.send("Tarefa:"+ req.body.ftarefa)
    mandarTarefa.update(
        { ftarefa: req.body.ftarefa},
        { where: {id: '40' }},
        
        console.log('aa:',sequelize.query(`SELECT MAX(id) FROM litarefas`))
    ).then(()=>{
        //PARA REDIRECIONAR ASSIM QFIZER O CADASTRO PARA OUTRA PAGINA USA=SE:
        // res.redirect('/tarefas')
        console.log("Cadastro realizado com sucesso!")
    }).catch((erro)=>{
        console.log("ERRO: Cadastro não foi realizado!/tarefas "+erro)
    })
    
})

app.listen(8080)