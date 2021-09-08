const bancoDeDados = require('./bancoDeDados')

const Cadastro = bancoDeDados.sequelize.define('litarefas',{
    email: {
        type: bancoDeDados.Sequelize.STRING
    },
    password: {
        type: bancoDeDados.Sequelize.STRING
    },
    ftarefa: {
        type: bancoDeDados.Sequelize.STRING
    }

})
//Criar a tabela
// Cadastro.sync({force:true})

module.exports = Cadastro