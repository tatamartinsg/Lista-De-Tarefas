const conexao = require('../infraestrutura/conexao')
let i = 0;
class Tarefa{
    teste(tarefa){
            
            console.log('i:',i+=1)
            const sql = `SELECT * FROM cadastroTarefa where id = (SELECT MAX(id) FROM cadastroTarefa);`
                console.log(sql)
                conexao.query(sql, (erro,resultados) => {
                    if(erro){
                        console.log(erro)
                        console.log(`Tabela${i} já existe!`)

                    }
                    else{
                        console.log("Pegar dados da ultima pessoa inserida: ",Object.assign({},resultados))
                        const ultimo_id = resultados[0].id
                        console.log("id da ultima pessoa inserida:",ultimo_id)

                        const sql3 = `ALTER TABLE cadastroTarefa ADD tarefa${i} varchar(60);`
                        conexao.query(sql3, (erro,resultados) => {
                            if(erro){
                                // console.log("Erro ID update = ",erro)
                                console.log(`Tabela${i} já existe!`)
                                const sql4 = `UPDATE cadastroTarefa SET tarefa${i} = '${tarefa}' WHERE id = ${ultimo_id}`
                                conexao.query(sql4, (erro,resultadosss) => {
                                    if(erro){
                                        console.log("Erro ID update = ",erro)
                                    }
                                    else{
                                        console.log('UPDATE DEU CERTO ',resultadosss)
                                    }
                            
                                })
                            }
                            else{
                                console.log("Adicionou a nova coluna")
                                const sql4 = `UPDATE cadastroTarefa SET tarefa${i} = '${tarefa}' WHERE id = ${ultimo_id}`
                                conexao.query(sql4, (erro,resultadosss) => {
                                    if(erro){
                                        console.log("Erro ID update = ",erro)
                                    }
                                    else{
                                        console.log('UPDATE DE UCERTO ',resultadosss)
                                    }
                            
                                })

                            }
                                
                        })

                    }
                })

    }
    }
// class Tarefa {
//     lista(res){
//         const sql = 'SELECT * FROM cadastroTarefa'

//             conexao.query(sql, (erro, resultados) => {
//                 if(erro){
//                     console.log("Lista erro:",erro)
//                 }
//                 else{
//                     console.log("Deu certo lista tarefa: ",resultados)
//                 }
//             })
//     }
//     buscaPorId(tarefa,id){
//         console.log('tarefa e id:',tarefa,id)
//         const sql = `SELECT MAX(id) FROM cadastroTarefa`
//         conexao.query(sql,(erro,resultados) => {
//             if(erro){
//                 console.log("Erro ID = ",erro)
//             }
//             else{
//                 console.log('ID deu certo: ',resultados)
//                 return resultados
//             }
//         })
//         const sql2 = `UPDATE cadastroTarefa SET tarefaUM = "TESTE2" WHERE id = ${sql}`
//         conexao.query(sql2, (erro,resultados) => {
//             if(erro){
//                 console.log("Erro ID update = ",erro)
//             }
//             else{
//                 console.log('UPDATE DE UCERTO ',resultados)
//             }
    
//         })
//     }
// }

module.exports = new Tarefa