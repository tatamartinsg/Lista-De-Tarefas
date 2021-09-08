const bodyParser = require('body-parser')
const { sequelize } = require('./bancoDeDados')
const bancoDeDados = require('./bancoDeDados')
const cadastro = require("./Cadastro")


const MandarTarefa = bancoDeDados.sequelize.define('litarefas',{
    email: {
        type: bancoDeDados.Sequelize.STRING
    },
    password: {
        type: bancoDeDados.Sequelize.STRING
    },
    ftarefa: {
        type: bancoDeDados.Sequelize.STRING
    },
    
})
// console.log('teste:'+bancoDeDados.sequelize.query('SELECT LAST_INSERT_ID()'))
// const roi = bancoDeDados.sequelize.query(`SELECT MAX(id) FROM litarefas`)
// const teste = await sequelize.query("SELECT MAX(id) FROM litarefas")
// console.log(teste)
// const jane = cadastro.update(
//     { email: 'teste2222@hotmail.com', ftarefa: 'TESTE'},
//     { where: { id: '1' } }
//     ).then(result =>
//         { console.log('ue') }
//     )
//     .catch(err =>
//         console.log(err)
//     )
//     console.log(jane.ftarefa)


module.exports = MandarTarefa