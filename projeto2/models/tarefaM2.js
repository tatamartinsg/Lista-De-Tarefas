const conexao = require('../infraestrutura/conexao')

class Tarefas{
    adicionaTarefaAoBanco(body,res,id_login){
        console.log(id_login)
        const sql_select = `SELECT * FROM cadastroEmail WHERE id = '${id_login}';`
                console.log(sql_select)
                conexao.query(sql_select, (erro,resultados) => {
                    if(erro){
                        console.log(erro)
                    }
                    else{
                        const sql3 = `INSERT INTO cadastroTarefas SET codigo_id = ${id_login}`
                        conexao.query(sql3, (erro,results2) => {
                            if(erro){
                                console.log("Erro INSERT update = ",erro)
                            }
                           else{
                            const sql4 = `SELECT * FROM cadastroTarefas where id = (SELECT MAX(id) FROM cadastroTarefas);`
                            conexao.query(sql4, (erro,results4) => {
                                if(erro){
                                    console.log(erro)
                                }
                                else{
                                    console.log(results4[0].id)
                                    var ultimo_id_tarefa = results4[0].id
                                    const sql2 = `UPDATE cadastroTarefas SET tarefas = '${body.tarefaUM}' WHERE id = ${ultimo_id_tarefa} AND codigo_id = ${id_login};`
                                    conexao.query(sql2, (erro,results3) => {
                                        if(erro){
                                            console.log("Erro ID update = ",erro)
                                                }
                                        else{
                                            console.log(`UPDATE DEU CERTO\n Alterou a tarefas = '${body.tarefaUM}' onde codigo_id = ${id_login} `,)
                                            
                                            // console.log(`A tarefa ${tarefa} foi adicionada ao banco de dados!`)
                                            }
                                    })
                                }
                           })
                        }
                        // console.log(resultados)
                        // this.teste(resultados)
                        res.json(resultados)
                    })
                 }
                })
    }

    teste(result){
        console.log('resultado:',result)
    }

}

module.exports = new Tarefas