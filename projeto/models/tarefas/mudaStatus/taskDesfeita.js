const conexao = require('../../../infraestrutura/conexao')
/*
    Quando o botão concluir é clicado novamente, envia o id (da tarefa clicada) para o back end e dispara a function taskDesfeita para o
    status da tarefa ser mudado para "null"

    @param{getId} define o id da tarefa clicada
*/
module.exports = function taskDesfeita(getId){
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