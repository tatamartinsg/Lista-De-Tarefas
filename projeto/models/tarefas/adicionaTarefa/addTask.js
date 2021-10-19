const conexao = require('../../../infraestrutura/conexao.js')

/*   <summary> 
//     @params{body} recebe a requisição da rota post, dessa forma, conseguimos acesso ao input (valor) da tarefa
//     @params{res} recebe o response da rota post, dessa forma, conseguimos enviar o response.json
//     @params{id_login} recebe o id referente ao login do usuário
     </summary>
*/
class insereCodigoCadastroTask{
    //insertCodigoCadastro(id_login,body,res) = insere o código id do email logado nas tarefas que esse usuário criou
    insertCodigoCadastro(id_login,body,res){
        const sql_insert = `INSERT INTO cadastroTarefas SET codigo_id = ${id_login}`
        conexao.query(sql_insert, (erro_insert,resultInsert) => {
                if(erro_insert){
                    return erro_insert;
                }
                else{
                    return this.selectLastTaskSent(body,id_login,res);
                }
        })
    }
}

class selectUltimaTask extends insereCodigoCadastroTask{
    //selectLastTaskSent(body,id_login,res) = seleciona o ultimo id inserido na tabela de tarefas (ou seja, a ultima tarefa inserida)
    selectLastTaskSent(body,id_login,res){
        const sql_select_id = `SELECT * FROM cadastroTarefas WHERE id = (SELECT MAX(id) FROM cadastroTarefas); `
                conexao.query(sql_select_id, (erro_id,resultado_id)=>{
                    if(erro_id){
                        console.log("Deu erro ao selecionar o id: ", erro_id)
                    }
                    else{
                        const ultimo_id_tarefa = resultado_id[0].id
                        this.updateTarefa(ultimo_id_tarefa,body,id_login,res)
                    }
     })
    }
}
class atualizaTask extends selectUltimaTask {
    //updateTarefa(ultimo_id_tarefa,body,id_login,res) = atualiza no banco de dados a ultima tarefa que foi adicionada
    updateTarefa(ultimo_id_tarefa,body,id_login,res){
        const sql_update = `UPDATE cadastroTarefas SET tarefas = '${body.tarefaUM}' WHERE id = ${ultimo_id_tarefa} AND codigo_id = ${id_login};`
        conexao.query(sql_update , (erro,results3) => {
            if(erro){
                console.log("Erro ID update = ",erro)
            }
            else{
                console.log(`UPDATE DEU CERTO\n Alterou a tarefas = '${body.tarefaUM}' onde codigo_id = ${id_login} e id = ${ultimo_id_tarefa} `)
                res.json(ultimo_id_tarefa)
            }
        })
    }
}

module.exports = new atualizaTask