const Sequelize = require('sequelize')
const sequelize = new Sequelize('tarefas','root','password',{
    host:'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log("Conexão com o banco de dados com sucesso!")
}).catch((erro) => {
    console.log("Erro ao realizar a conexão com banco de dados"+erro)
})

const Tarefas = sequelize.define('litarefas',{
    nomeTarefa:{
        type: Sequelize.STRING,
    }
})

Tarefas.create({
    nomeTarefa:"Estudar"
})