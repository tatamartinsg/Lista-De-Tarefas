const conexao = require('../infraestrutura/conexao')

class Tarefa {
    lista(res){
        const sql = 'SELECT * FROM cadastroTarefa'

            conexao.query(sql, (erro, resultados) => {
                if(erro){
                    console.log("Lista erro:",erro)
                }
                else{
                    console.log("Deu certo lista tarefa: ",resultados)
                }
            })
    }
    buscaPorId(tarefa,id){
        console.log('tarefa e id:',tarefa,id)
        const sql = `SELECT MAX(id) FROM cadastroTarefa`
        conexao.query(sql,(erro,resultados) => {
            if(erro){
                console.log("Erro ID = ",erro)
            }
            else{
                console.log('ID deu certo: ',resultados)
                return resultados
            }
        })
        const sql2 = `UPDATE cadastroTarefa SET tarefaUM = "TESTE2" WHERE id = ${sql}`
        conexao.query(sql2, (erro,resultados) => {
            if(erro){
                console.log("Erro ID update = ",erro)
            }
            else{
                console.log('UPDATE DE UCERTO ',resultados)
            }
    
        })
    }
}

module.exports = new Tarefa