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
                                            console.log(`UPDATE DEU CERTO\n Alterou a tarefas = '${body.tarefaUM}' onde codigo_id = ${id_login} `)
                                            identificaIdTarefaEnviada()

                                            function identificaIdTarefaEnviada(){
                                                const sql_select = `SELECT * FROM cadastroTarefas WHERE id = (SELECT MAX(id) FROM cadastroTarefas);`;
                                                conexao.query(sql_select, (erro, mostraUltimaTarefa) => {
                                                    if (erro){
                                                        return ('Erro ao selecionar a ultima tarefa enviada: ',erro)
                                                    }
                                                    else{
                                                        const id_tarefa = mostraUltimaTarefa[0].id
                                                        console.log('Resultados da ultima tarefa enviada: ',mostraUltimaTarefa[0].id)
                                                        res.json(mostraUltimaTarefa)
                                                    }
                                                })
                                            }
                                            
                                            // console.log(`A tarefa ${tarefa} foi adicionada ao banco de dados!`)
                                            }
                                    })
                                }
                           })
                        }
                        // console.log(resultados)
                        // this.teste(resultados)
                        // res.json(resultados)
                    })
                 }
                })
    }

    selecionaTarefaPorId(getId,qntd_click){
        const sql_select = `SELECT * FROM cadastroTarefas WHERE id = '${getId}';`
        conexao.query(sql_select,(erro,resultado_select)=>{
            if(erro){
                console.log("Erro ao selecionar tarefa clicada pelo ID: ",erro)
            }
            else{
                console.log("TAREFA SELECIONADA PELO ID COM SUCESSO: ", resultado_select)
                if (qntd_click % 2 != 0){ //se for impar, ou seja tarefa concluida
                    tarefaConcluida(getId)
                    function tarefaConcluida(getId){
                        const sql_update = `UPDATE cadastroTarefas SET status = 'concluido' WHERE id = ${getId};`
                        conexao.query(sql_update, (erro,resultado_update) => {
                            if(erro){
                                return console.log("erro ao mudar status para concluido: ",erro)
                            }
                            else{
                                console.log("Tarefa concluida com sucesso!")
                            }
                        })
                    }
                }
                else{
                    const sql_update2 = `UPDATE cadastroTarefas SET status = null WHERE id = ${getId};`
                        conexao.query(sql_update2, (erro,resultado_update) => {
                            if(erro){
                                return console.log("erro ao mudar status para concluido: ",erro)
                            }
                            else{
                                console.log("status: 'null' da tarefa alterado com sucesso!")
                            }
                        })
                }
                
                
            }
        })
    }

    deleteTask(id){
        const sql_delete = `DELETE FROM cadastroTarefas WHERE id = ${id};`
        conexao.query(sql_delete, (erro,result_delete)=> {
            if(erro){
                return console.log("erro ao deletar tarefas do banco de dados: ",erro)
            }
            else{
                console.log("Tarefa deletada com sucesso!")
            }
        })
    }

}

module.exports = new Tarefas