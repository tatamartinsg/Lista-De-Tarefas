
const $novaTarefa = document.querySelector('[data-form-button]');
var tarefas = [];
var i = 0
var incrementos = []
var incremento = 0
var contar_clicks = 0

// =============== Cria o botão concluir ============== //
const BotaoConcluir = (id) =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.classList.add(`check-button${id}`)
    botaoConclui.innerHTML = 'Concluir'
    return botaoConclui;
 }

//============= Criar botao deleta =============//

const BotaoDeletar = (id) => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.classList.add(`delete-button${id}`);
    botaoDeleta.innerText = "Deletar"

    return botaoDeleta;
}
const criarInputTarefa = (valorInput,id) => {
    const criarInput = document.createElement('input')
    criarInput.name = `tarefaUM`
    criarInput.type = 'hidden'
    criarInput.value = valorInput
    criarInput.classList.add('all-input')
    const valor = criarInput.value

    return criarInput
}

function clicouDeleteButton(evento,id) {

    const form = document.querySelector(`.form-ul${id}`)
    form.remove()

}
var j = 0
const criarTarefa = (evento) =>{
    contar_clicks = 0

    
    const $acessar_ul = document.querySelector('[data-ul]');
    const criarForm = document.createElement('form')
    criarForm.classList.add(`form-ul${j}`)
    criarForm.classList.add("all-form")
    $acessar_ul.appendChild(criarForm)


    const $acessar_form = document.querySelector(`.form-ul${j}`)
    const $acessarInput = document.querySelector('[data-form-input]');
    const valorInput = $acessarInput.value;
    tarefas.push(valorInput)

    if(!valorInput|| typeof valorInput == undefined || valorInput == null){
        alert("Inválido! Tarefa Vazia!")

    }
    else{
        document.querySelector('.form1994')
        const criarTarefaLi = document.createElement('li');
        criarTarefaLi.classList.add('task');
        let id = document.createAttribute('id')
        id.value = i++
        criarTarefaLi.classList.add(`taskli${id.value}`);
        criarTarefaLi.setAttributeNode(id)

        const conteudo = `<p class="content">${valorInput}<p>`;

        criarTarefaLi.innerHTML = conteudo;
        criarTarefaLi.appendChild(criarInputTarefa (valorInput,id.value))
        criarTarefaLi.appendChild(BotaoDeletar (id.value));
        criarTarefaLi.appendChild(BotaoConcluir(id.value));
        
        
        $acessar_form.appendChild(criarTarefaLi)
    
        $botaoConclui = document.querySelector(`.check-button${id.value}`)
        var contacliq = 0
        $botaoConclui.addEventListener('click', function (e) {
            contacliq += 1
            const pegaTarefa = e.target;
            const tarefaConcluida = pegaTarefa.parentElement;
            tarefaConcluida.classList.toggle('done');

        })
        $acessarbotao = document.querySelector(`.delete-button${id.value}`)
        $acessarbotao.setAttribute("id",`btn${id.value}`)

        document.querySelectorAll("button").forEach((button)=> {
            button.addEventListener('click', (event)=> {
                
                const pegaid = event.target
                const pegarElementoPaiBottao = pegaid.parentElement
                const id_botao = pegaid.id;
            })
        })

        $acessarbotao.addEventListener('click', (evento)=>{clicouDeleteButton(evento,id.value)})
        j++
        incremento++
        let tarefas_listadas = new Array
        if (localStorage.hasOwnProperty("tarefas_listadas")){
            tarefas_listadas = JSON.parse(localStorage.getItem("tarefas_listadas"))
        }
        tarefas_listadas.push({
            tarefas: valorInput
        })

        localStorage.setItem("tarefas_listadas", JSON.stringify(tarefas_listadas))

    }
        
}
$novaTarefa.addEventListener('click', criarTarefa);     
