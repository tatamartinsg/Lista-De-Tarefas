const conexao = require('../infraestrutura/conexao')
/*
    Quando o botão delete é clicado, envia o id para o back end e dispara a function deleteTask para ela ser
    excluída do banco de dados1

    @param{id} define o id da tarefa clicada
*/
module.exports = function deleteTask(id) {
    const sql_delete = `DELETE FROM cadastroTarefas WHERE id = ${id};`
        conexao.query(sql_delete, (erro,result_delete)=> {
            if(erro){
                return console.log("erro ao deletar tarefas do banco de dados: ",erro)
            }
            else{
                console.log("Tarefa DELETADA com sucesso!")
            }
        })
    
}