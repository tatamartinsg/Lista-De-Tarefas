const $novaTarefa = document.querySelector('[data-form-button]');
var tarefas = [];
const BotaoConcluir = (id) =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.classList.add(`check-button${id}`)
    
    botaoConclui.innerHTML = 'Concluir'
    botaoConclui.addEventListener('click', (evento) => {taskDone(evento,id)})
    return botaoConclui;
 }

 
var contar_clicks = 0
const taskDone = (evento,id) => {
    //============ Marcar tarefa como concluida =============//
     
        
        var mudarTypeConclui = document.querySelector(`.check-button${id}`)
        mudarTypeConclui.type = 'submit'

        const mudarTypeDelete = document.querySelector(`.delete-button${id}`)
        mudarTypeDelete.type = 'button'

        const mudarValueInput = document.querySelector(`.input-li${id}`)
        mudarValueInput.value = 1

        const pegaTarefa = evento.target;
        const tarefaConcluida = pegaTarefa.parentElement;
        
        tarefaConcluida.classList.toggle('done');
        if (!document.querySelector('li.done')){
            console.log('tarefa desfeita')
            mudarValueInput.value = 2
        }
        
}
//============= Criar botao deleta =============//

const BotaoDeletar = (id) => {
    const botaoDeleta = document.createElement('button');
    // botaoDeleta.innerText = 'Deletar';
    
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.classList.add(`delete-button${id}`);
    botaoDeleta.innerText = "Deletar"
    botaoDeleta.type = 'submit'
    // botaoDeleta.onclick = function() {location.href = '/add-tarefas2/:id'}
    // botaoDeleta.setAttribute('for','tarefaUM2')

    // console.log(id)

    return botaoDeleta;

}
const criarInputT = (valorInput,id) => {
    const criarInput = document.createElement('input')
    criarInput.name = `tarefaUM`
    criarInput.type = 'hidden'
    criarInput.value = valorInput
    const valor = criarInput.value
    console.log("valor input:",valor)
    return criarInput
}
const criarInputT2 = (valorInput,id) => {
    const criarInput2 = document.createElement('input')
 
    criarInput2.name = `idPosicaoTarefa`
    criarInput2.type = 'hidden'
    criarInput2.value = id
    const valor = criarInput2.value
    console.log("valor input:",valor)

    return (criarInput2)
}
const criarInputIdBotao = (id) => {
    const criarInputIdBotao = document.createElement('input')

    criarInputIdBotao.name = 'idBotao'
    criarInputIdBotao.type = 'hidden'
    criarInputIdBotao.value = 7
    criarInputIdBotao.classList.add(`input-li${id}`)

    return criarInputIdBotao
}


var i = 0
function clicouDeleteButton(evento,id) {
    console.log('id: ',id)
    const mudarTypeConclui = document.querySelector(`.check-button${id}`)
    mudarTypeConclui.type = 'button'

    const mudarTypeDelete = document.querySelector(`.delete-button${id}`)
    mudarTypeDelete.type = 'submit'
   

    const mudarValueInput = document.querySelector(`.input-li${id}`)
    mudarValueInput.value = 0
    
    const form = document.querySelector(`.form-ul${id}`)
    form.submit()
    form.remove()

}
var j = 0
const criarTarefa = (evento) =>{
   
    
    document.querySelector('.form1994').submit()
    evento.preventDefault();
    const $acessar_ul = document.querySelector('[data-ul]');
    const criarForm = document.createElement('form')
    criarForm.classList.add(`form-ul${j}`)
    criarForm.action = "/tarefas/add-tarefa2"
    criarForm.method = "POST"
    $acessar_ul.appendChild(criarForm)


    const $acessar_form = document.querySelector(`.form-ul${j}`)
    const $acessarInput = document.querySelector('[data-form-input]');
    const valorInput = $acessarInput.value;
    tarefas.push(valorInput)
    console.log(tarefas)

    const criarTarefaLi = document.createElement('li');
    criarTarefaLi.classList.add('task');
    let id = document.createAttribute('id')
    id.value = i++
    console.log(id.value)
    criarTarefaLi.setAttributeNode(id)


    const conteudo = `<p class="content">${valorInput}<p>`;

    criarTarefaLi.innerHTML = conteudo;
    criarTarefaLi.appendChild(criarInputIdBotao(id.value))
    criarTarefaLi.appendChild(criarInputT2(valorInput,id.value))
    criarTarefaLi.appendChild(criarInputT(valorInput,id.value))
    criarTarefaLi.appendChild(BotaoDeletar (id.value));
    criarTarefaLi.appendChild(BotaoConcluir(id.value));
    
    $acessar_form.appendChild(criarTarefaLi)
    
    console.log(BotaoDeletar)

    
    

    $acessarbotao = document.querySelector(`.delete-button${id.value}`)
    $acessarbotao.setAttribute("id",`btn${id.value}`)

    document.querySelectorAll("button").forEach((button)=> {
        button.addEventListener('click', (event)=> {
            
            const pegaid = event.target
            const pegarElementoPaiBottao = pegaid.parentElement
            const id_botao = pegaid.id;
            console.log(id_botao)
            console.log("elemento pai:", pegarElementoPaiBottao)
        })
    })


    

    $acessarbotao.addEventListener('click', (evento)=>{clicouDeleteButton(evento,id.value)})
    // $acessarbotao.addEventListener('click', (evento) => {deletarTarefa(evento,id.value)})
    j++

}

$novaTarefa.addEventListener('click', criarTarefa);

//=========== Criar Botao concluir ===================//

