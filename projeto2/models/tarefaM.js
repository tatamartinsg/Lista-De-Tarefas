const conexao = require('../infraestrutura/conexao')
let i = 0;

let armazena_posicao = []
let criaIdArray = []
let teste = [{
    armazena_posicao: armazena_posicao,
    criaIdArray: criaIdArray
}]

// criaIdArray.push(geraId)
// console.log(criaIdArray)
class Tarefa{
    
    adicionaTarefaBanco(tarefa,id3){
            let geraId = id3
            criaIdArray.push(geraId)
            console.log(criaIdArray)
            console.log(id3)
            console.log("recebe i antes: ",i)
            if (i == 0){
                armazena_posicao.push(i)
            } 
            else{
                armazena_posicao.push(i)
            }
            i+= 1
            console.log("recebe i dps: ",i)
            console.log(armazena_posicao)
            console.log(teste)
            // console.log('i:',i++)
            const sql = `SELECT * FROM cadastroEmail where id = (SELECT MAX(id) FROM cadastroEmail);`
                console.log(sql)
                conexao.query(sql, (erro,resultados) => {
                    if(erro){
                        console.log(erro)
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
                                }
                                else{
                                    var ultimo_id_tarefa = results4[0].id
                                    const sql2 = `UPDATE cadastroTarefas SET tarefas = '${tarefa}', identificaTarefa = '${id3}' WHERE id = ${ultimo_id_tarefa};`
                                    conexao.query(sql2, (erro,results) => {
                                        if(erro){
                                            console.log("Erro ID update = ",erro)
                                                }
                                        else{
                                            console.log('UPDATE DEU CERTO ',results4)
                                            
                                            // console.log(`A tarefa ${tarefa} foi adicionada ao banco de dados!`)
                                            }
                                    })
                                  }
                                })
                            }
                        })
                    }
                })
        
    }

    deleteTask(pegaValorTarefaClicada){
        console.log('i:',i)
        let pegaId = criaIdArray[i-1]
        const sqlDelete = `SELECT * FROM cadastroTarefas where tarefas = '${pegaValorTarefaClicada}' AND codigo_id = (SELECT MAX(codigo_id) FROM cadastroTarefas);`
                console.log(sqlDelete)
                conexao.query(sqlDelete, (erro,resultadosDelete) => {
                    if(erro){
                        console.log(erro)
                        console.log(`Tarefa não encontrada!`)
                    }
                    else{
                        console.log(`Selecionamos a tarefa: ${pegaValorTarefaClicada}`)
                        console.log(resultadosDelete[0].id)
                        if (resultadosDelete.length == 1){ // se NÃO houver tarefa repetida, delete ela do banco!
                            const sqlDelete2 = `DELETE FROM cadastroTarefas WHERE tarefas = '${pegaValorTarefaClicada}' AND  id='${resultadosDelete[0].id}'`;
                            conexao.query(sqlDelete2,(erro,deletou) => {
                                if(erro){
                                    console.log("Deu erro ao deleetar", erro)
                                }
                                else{
                                    console.log('tarefa deletada com sucesso!')
                                }
                            })
                        }
                        else{ //se tiver repetida, ainda nao sei como fazer para excluir a tarefa específica que foi clicada
                            const sqlDelete2 = `DELETE FROM cadastroTarefas WHERE tarefas = '${pegaValorTarefaClicada}' AND  identificaTarefa = '${pegaId}'`;
                            conexao.query(sqlDelete2,(erro,deletou) => {
                                if(erro){
                                    console.log("Deu erro ao deleetar", erro)
                                }
                                else{
                                    var a = i-1
                                    console.log(a)
                                    console.log('Chaveis atuais: ',criaIdArray)
                                    delete criaIdArray[a];
                                    i -= 1
                                   
                                }
                            })
                        }
                        console.log(resultadosDelete.length)
                        console.log(resultadosDelete)
                        
                    }
                })
    }

    alteraStatusConcluirTask(pegaTarefaClicada){
        const sqlAlteraStatus = `SELECT * FROM cadastroTarefas where tarefas = '${pegaTarefaClicada}' AND codigo_id = (SELECT MAX(codigo_id) FROM cadastroTarefas);`
        conexao.query(sqlAlteraStatus, (erro,resultadoStatus) => {
            if(erro){
                console.log("Erro ao selecionar a tarefa: ",erro)
            }
            else{
                if(resultadoStatus.length == 1){
                    const sqlAlteraStatus2 = `UPDATE cadastroTarefas SET status = 'concluida' WHERE tarefas = '${pegaTarefaClicada}' AND codigo_id = ${resultadoStatus[0].codigo_id};`
                            conexao.query(sqlAlteraStatus2,(erro,concluiuTarefa) => {
                                if(erro){
                                    console.log("Deu erro ao mudar status de tarefa", erro)
                                }
                                else{
                                    console.log(`Status: concluida, ${pegaTarefaClicada} `)
                                }
                            })
                }
                

            }
        })
    }

    alteraStatusTaskDesfeita(pegaTarefaClicada){
        const sqlAlteraStatus = `SELECT * FROM cadastroTarefas where tarefas = '${pegaTarefaClicada}' AND codigo_id = (SELECT MAX(codigo_id) FROM cadastroTarefas);`
        conexao.query(sqlAlteraStatus, (erro,resultadoStatus) => {
            if(erro){
                console.log("Erro ao selecionar a tarefa: ",erro)
            }
            else{
                if(resultadoStatus.length == 1){
                    const sqlAlteraStatus2 = `UPDATE cadastroTarefas SET status = null WHERE tarefas = '${pegaTarefaClicada}' AND codigo_id = ${resultadoStatus[0].codigo_id};`
                            conexao.query(sqlAlteraStatus2,(erro,concluiuTarefa) => {
                                if(erro){
                                    console.log("Deu erro ao mudar status de tarefa", erro)
                                }
                                else{
                                    console.log(`Status: null, ${pegaTarefaClicada} `)
                                }
                            })
                }
            }
        })
    }
}

module.exports = new Tarefa