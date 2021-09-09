const conexao = require('../infraestrutura/conexao')
let i = 0;
class Tarefa{
    teste(tarefa){
            
            console.log('i:',i+=1)
            const sql = `SELECT * FROM cadastroEmail where id = (SELECT MAX(id) FROM cadastroEmail);`
                console.log(sql)
                conexao.query(sql, (erro,resultados) => {
                    if(erro){
                        console.log(erro)
                        console.log(`Tabela${i} já existe!`)
                    }
                    else{
                        const ultimo_id_email = resultados[0].id
                        const sql3 = `INSERT INTO cadastroTarefas SET codigo_id = ${ultimo_id_email}`
                        conexao.query(sql3, (erro,results2) => {
                            if(erro){
                                console.log("Erro INSERT update = ",erro)
                            }
                           else{
                            const sql4 = `SELECT * FROM cadastroTarefas where id = (SELECT MAX(id) FROM cadastroTarefas);`
                            conexao.query(sql4, (erro,results4) => {
                                if(erro){
                                    console.log(erro)
                                    console.log(`Tabela${i} já existe!`)
                                }
                                else{
                                    var ultimo_id_tarefa = results4[0].id
                                    const sql2 = `UPDATE cadastroTarefas SET tarefas = '${tarefa}' WHERE id = ${ultimo_id_tarefa};`
                                    conexao.query(sql2, (erro,results) => {
                                        if(erro){
                                            console.log("Erro ID update = ",erro)
                                                }
                                        else{
                                            console.log('UPDATE DEU CERTO ',results4)
                                            }
                                    })
                                  }
                                })
                            }
                        })
                    }
                })
        
    }    
}

module.exports = new Tarefa