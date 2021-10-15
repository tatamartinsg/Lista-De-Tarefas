const conexao = require('../infraestrutura/conexao')
const taskConcluida = require('../bd/mudaStatus/taskConcluida')
const taskDesfeita = require('../bd/mudaStatus/taskDesfeita')

/*   <summary> 
        class TakeTask:
            insertCodigoCadastro(id_login,body,res) = insere o código id do email logado nas tarefas que esse usuário criou
            selectLastTaskSent(body,id_login,res) = seleciona o ultimo id inserido na tabela de tarefas (ou seja, a ultima tarefa inserida)
            updateTarefa(ultimo_id_tarefa,body,id_login,res) = atualiza no banco de dados a ultima tarefa que foi adicionada
        
//     @params{body} recebe a requisição da rota post, dessa forma, conseguimos acesso ao input (valor) da tarefa
//     @params{res} recebe o response da rota post, dessa forma, conseguimos enviar o response.json
//     @params{id_login} recebe o id referente ao login do usuário
     </summary>
*/
class TakeTask{
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
/*   <summary> 
        class StatusTask criada para atualizar os status da tarefa, que foi clicada, no banco de dados
     </summary>
*/
class StatusTask extends TakeTask{
        /* 
            @params{getId} define o ID específico da tarefa (dentro do banco de dados) que foi clicada no front.
            @params{qntd_click} (quantidade de click) define se a tarefa mudará seus status para concluida, se o click for impar, ou null(desfeita) se for par.
        */
    changeStatusTask(getId,qntd_click){
        if (qntd_click % 2 != 0){ //se for impar, ou seja tarefa concluida
            taskConcluida(getId)
        }
        else{
            taskDesfeita(getId)
        }
    }
}


module.exports = new StatusTask
