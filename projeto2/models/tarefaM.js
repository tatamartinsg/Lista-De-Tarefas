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
    buscaPorId(id,res){
        console.log("DEU CERTI")
        console.log(id)
        console.log(res.id)
        
        // const sqlId = `SELECT * FROM cadastroTarefas WHERE id=${id}`
        // conexao.query(sqlId,(erro,resultados) => {
        //     if(erro){
        //         console.log("Erro ID = ",erro)
        //     }
        //     else{
        //         console.log('ID deu certo: ',resultados)
        //     }
        // })
    }
    deleteTask(pegaValorTarefaClicada){
    //     const testesql = `SELECT * FROM cadastroTarefas where codigo_id = (SELECT MAX(codigo_id) FROM cadastroTarefas);`
    //     conexao.query(testesql,(erro,result_id) => {
    //         if(erro){
    //             console.log(erro)
    //         }
    //         else{
    //             console.log("Resultado id:",result_id)
    //         }
    //     })
    // }
        const sqlDelete = `SELECT * FROM cadastroTarefas where tarefas = '${pegaValorTarefaClicada}' AND codigo_id = (SELECT MAX(codigo_id) FROM cadastroTarefas);`
                console.log(sqlDelete)
                conexao.query(sqlDelete, (erro,resultadosDelete) => {
                    if(erro){
                        console.log(erro)
                        console.log(`Tarefa não encontrada!`)
                    }
                    else{
                        console.log(`Selecionamos a tarefa: ${pegaValorTarefaClicada}`)
                        if (resultadosDelete.length == 1){
                            const sqlDelete2 = `DELETE FROM cadastroTarefas WHERE tarefas = '${pegaValorTarefaClicada}';`
                            conexao.query(sqlDelete2,(erro,deletou) => {
                                if(erro){
                                    console.log("Deu erro ao deleetar", erro)
                                }
                                else{
                                    console.log('tarefa deletada com sucesso!')
                                }
                            })
                        }
                        else{
                            const sqlDelete3 = `SELECT LAST_INSERT_ID()`
                            conexao.query(sqlDelete3, (erro,resultdel)=> {
                                if(erro){
                                    console.log(erro)
                                }
                                else{
                                    console.log(resultdel)
                                }
                            })
                        }
                        console.log(resultadosDelete.length)
                        
                        console.log(resultadosDelete)
                        
                        // console.log('resultados: ',resultadosDelete.id)
                        // console.log('resultados: ',resultadosDelete.codigo_id)
                    }
                })
    }
    
}

module.exports = new Tarefa