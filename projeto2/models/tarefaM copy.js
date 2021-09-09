const conexao = require('../infraestrutura/conexao')
let i = 0;
class Tarefa{
    teste(tarefa){
            
            console.log('i:',i+=1)
            const sql = `SELECT * FROM cadastroTarefa where id = (SELECT MAX(id) FROM cadastroTarefa);`
                console.log(sql)
                conexao.query(sql, (erro,resultados) => {
                    if(erro){
                        console.log("erro:",erro)
                    }
                    else{
                        console.log("Pegar dados da ultima pessoa inserida: ",Object.assign({},resultados))
                        console.log("id da ultima pessoa inserida:",resultados[0].id)
                        const sql3 = `UPDATE cadastroTarefa SET tarefaUM = '${tarefa}' WHERE id = ${resultados[0].id}`
                        conexao.query(sql3, (erro,resultados) => {
                            if(erro){
                                console.log("Erro ID update = ",erro)
                            }
                            else{
                                console.log('UPDATE DE UCERTO ',resultados)
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