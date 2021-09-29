const conexao = require('../infraestrutura/conexao')
const taskConcluida = require('../bd/mudaStatus/taskConcluida')
const taskDesfeita = require('../bd/mudaStatus/taskDesfeita')
/*   <summary> 
        class AddTarefas criada para adicionar a tarefa, que foi escrita no input, no banco de dados
     </summary>
*/
class AddTarefas{
/*
    a função adicionaTarefaAoBanco insere o id logado (do usuário) nas tarefas que ele criou,
    atualiza as tarefas do usuário no banco de dados e sele, e seleciona os ids especificos das
    tarefas atualizadas, enviando em formato json

    @params{body} recebe a requisição da rota post, dessa forma, conseguimos acesso ao input (valor) da tarefa
    @params{res} recebe o response da rota post, dessa forma, conseguimos enviar o response.json
    @params{id_login} recebe o id referente ao login do usuário
*/
    adicionaTarefaAoBanco(body,res,id_login){
        console.log(id_login)
        const sql_insert = `INSERT INTO cadastroTarefas SET codigo_id = ${id_login}`
        conexao.query(sql_insert, (erro_insert,resultInsert) => {
                if(erro_insert){
                    return erro_insert;
                }
                else{
                    const sql_update = `UPDATE cadastroTarefas SET tarefas = '${body.tarefaUM}' WHERE id = (SELECT MAX(id)) AND codigo_id = ${id_login};`
                    conexao.query(sql_update , (erro,results3) => {
                        if(erro){
                            console.log("Erro ID update = ",erro)
                        }
                        else{
                            console.log(`UPDATE DEU CERTO\n Alterou a tarefas = '${body.tarefaUM}' onde codigo_id = ${id_login} `)

                            const sql_select = `SELECT * FROM cadastroTarefas WHERE id = (SELECT MAX(id) FROM cadastroTarefas);`;
                            conexao.query(sql_select, (erro, mostraUltimaTarefa) => {
                                if (erro){
                                    return ('Erro ao selecionar a ultima tarefa enviada: ',erro);
                                }
                                else{
                                    const id_tarefa = mostraUltimaTarefa[0].id
                                    console.log('Resultados da ultima tarefa enviada: ',mostraUltimaTarefa[0].id)
                                    res.json(mostraUltimaTarefa)
                                }
                            })
                        }
                    })                                                              
                }
        })
    }
}

/*   <summary> 
        class StatusTask criada para atualizar os status da tarefa, que foi clicada, no banco de dados
     </summary>
*/
class StatusTask extends AddTarefas{
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
