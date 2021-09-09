const $novaTarefa = document.querySelector('[data-form-button]');

const BotaoConcluir = () =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    
    botaoConclui.innerHTML = 'Concluir'
    botaoConclui.addEventListener('click', tarefaConcluida)
    return botaoConclui;
 }

 //============ Marcar tarefa como concluida =============//
    const tarefaConcluida = (evento) =>{
    const pegaTarefa = evento.target;
    const tarefaConcluida = pegaTarefa.parentElement;

    tarefaConcluida.classList.toggle('done');
}    //============= Criar botao deleta =============//
const BotaoDeletar = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'Deletar';
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta;

}

const deletarTarefa = (evento) => {
    const pegarEventoDeleta = evento.target;
    const pegarElementoPai = pegarEventoDeleta.parentElement
    pegarElementoPai.remove();
    return pegarEventoDeleta;
}
var i = 0
const criarTarefa = (evento) =>{
    
    console.log(i++)
    document.querySelector('form').submit()
    evento.preventDefault();
    const $acessar_ul = document.querySelector('[data-ul]');
    const $acessarInput = document.querySelector('[data-form-input]');
    const valorInput = $acessarInput.value;

    const criarTarefaLi = document.createElement('li');
    criarTarefaLi.classList.add('task');
    const conteudo = `<p class="content">${valorInput}<p>`;

    criarTarefaLi.innerHTML = conteudo;
    criarTarefaLi.appendChild(BotaoDeletar ());
    criarTarefaLi.appendChild(BotaoConcluir());
    $acessar_ul.appendChild(criarTarefaLi)
}

$novaTarefa.addEventListener('click', criarTarefa);
//=========== Criar Botao concluir ===================//


