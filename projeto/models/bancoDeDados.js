const Sequelize = require('sequelize')

const sequelize = new Sequelize('tarefas','root','password',{
    host:'localhost',
    dialect: 'mysql'
})


// sequelize.query()

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}