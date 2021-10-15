import { BotaoConcluir, BotaoDeletar, ClicarBotaoDelete } from "./createButtons.js"
import { criarInputTarefa, criarFormulario } from "./createInput&Form.js"

var tarefas = [];
var incremento_para_id = 0
var incremento_identificar_form = 0

const $novaTarefa = document.querySelector('[data-form-button]');
const $acessar_ul = document.querySelector('[data-ul]');
const $acessarInput = document.querySelector('[data-form-input]');

const criarTarefa = (valorInput) => {
    const $acessar_form = document.querySelector(`.form-ul${incremento_identificar_form}`)
    const criarTarefaLi = document.createElement('li');
    const conteudo = `<p class="content">${valorInput}<p>`;

    let id = document.createAttribute('id')
    id.value = incremento_para_id++

    criarTarefaLi.classList.add('task');
    criarTarefaLi.classList.add(`taskli${id.value}`);
    criarTarefaLi.setAttributeNode(id)
    criarTarefaLi.innerHTML = conteudo;
    criarTarefaLi.appendChild(criarInputTarefa (valorInput))
    criarTarefaLi.appendChild(BotaoDeletar (id.value));
    criarTarefaLi.appendChild(BotaoConcluir(id.value));
                
    $acessar_form.appendChild(criarTarefaLi)

    ClicarBotaoDelete(id.value)
}

const tryLocalStorage = (valorInput) => {
    let tarefas_listadas = new Array
    if (localStorage.hasOwnProperty("tarefas_listadas")){
        tarefas_listadas = JSON.parse(localStorage.getItem("tarefas_listadas"))
    }
    tarefas_listadas.push({
        tarefas: valorInput
    })

    localStorage.setItem("tarefas_listadas", JSON.stringify(tarefas_listadas))
}
//============= Cria A Tarefa =================//
const createTarefa = () =>{
    const valorInput = $acessarInput.value;
    tarefas.push(valorInput)

    $acessar_ul.appendChild(criarFormulario(incremento_identificar_form))
    
    if(!valorInput|| typeof valorInput == undefined || valorInput == null){
        return false;
    }
    else{
        document.querySelector('.form1994')
        criarTarefa(valorInput)
        tryLocalStorage(valorInput)
        incremento_identificar_form++
    }
        
}
$novaTarefa.addEventListener('click', createTarefa);     
