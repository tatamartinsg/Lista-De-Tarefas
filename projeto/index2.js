const express = require('express')
const app = express()
const port = 8080

var http = require('http')

//CONEXÃO COM O BANCO DE DADOS
const mysql = require('mysql')
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'password',
    database: 'tarefas'
})

conexao.connect((erro) => {
    if(erro){
        console.error("Erro de conexão:" + erro.stack)
        return
    }
    else{
        console.log("Conectou!")
    }

})

conexao.query('SELECT * FROM users', (erro,rows,fields) => {
    if(erro){
        console.log("Erro de conexão 2")
    }
    else{
        console.log("Resultado:", rows)
    }
})


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/src/todoist.html")
})

app.listen(port)