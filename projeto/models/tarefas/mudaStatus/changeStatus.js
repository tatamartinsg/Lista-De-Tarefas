const taskConcluida = require('./taskConcluida.js')
const taskDesfeita = require('./taskDesfeita.js')
/*   <summary> 
        class StatusTask criada para atualizar os status da tarefa, que foi clicada, no banco de dados
     </summary>
*/
class StatusTask{
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
