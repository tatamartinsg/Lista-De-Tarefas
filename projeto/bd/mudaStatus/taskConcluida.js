const conexao = require('../../infraestrutura/conexao')
/*
    Quando o botão concluir é clicado, envia o id (da tarefa) para o back end e dispara a function taskConcluida para o
    status da tarefa ser mudado para "concluido"

    @param{getId} define o id da tarefa clicada
*/
module.exports = function taskConcluida(getId){
    const sql_update = `UPDATE cadastroTarefas SET status = 'concluido' WHERE id = ${getId};`
    conexao.query(sql_update, (erro,resultado_update) => {
        if(erro){
            return console.log("erro ao mudar status para concluido: ",erro)
        }
        else{
            console.log("Tarefa CONCLUÍDA com sucesso!")
        }
    })
}