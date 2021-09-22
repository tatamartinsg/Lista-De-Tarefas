
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

 //============ Marcar tarefa como concluida =============//
 function tarefaFeita(e,id,contacliq) {
    console.log(e.target)
    console.log(contacliq)
    var mudarTypeConclui = document.querySelector(`.check-button${id}`)
    const mudarValueInput = document.querySelector(`.input-li${id}`)
    const mudarTypeDelete = document.querySelector(`.delete-button${id}`)

    mudarTypeConclui.type = 'submit'
    mudarTypeDelete.type = 'button'
    

     if (contacliq % 2 == 0){
        //  console.log(contacliq,'É PAR')
         mudarValueInput.value = 2
     }
     else{
        // console.log(contacliq,'É IMPAR')
        mudarValueInput.value = 1
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
const criarInputPosicaoTarefa = (valorInput,increm) => {
    const criarInput2 = document.createElement('input')
 
    criarInput2.name = `idPosicaoTarefa`
    criarInput2.type = 'hidden'
    criarInput2.value = incremento
    const valor = criarInput2.value
  

    return (criarInput2)
}

const criarInput_id_random = (random) => {
    const criarInput3 = document.createElement('input')
 
    criarInput3.name = `id_aleatorio`
    criarInput3.type = 'hidden'
    criarInput3.value = random


    return (criarInput3)
}

const criarInputIdBotao = (id) => {
    const criarInputIdBotao = document.createElement('input')

    criarInputIdBotao.name = 'idBotao'
    criarInputIdBotao.type = 'hidden'
    criarInputIdBotao.value = 7
    criarInputIdBotao.classList.add(`input-li${id}`)

    return criarInputIdBotao
}



function clicouDeleteButton(evento,id) {

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
    // evento.preventDefault();
    contar_clicks = 0
    const $acessar_li_random = document.querySelector('[data-form-input-hidden]')
    let random = Math.floor(Math.random() * 100000)
    $acessar_li_random.value = random

    


    const $acessar_ul = document.querySelector('[data-ul]');
    const criarForm = document.createElement('form')
    criarForm.classList.add(`form-ul${j}`)
    criarForm.classList.add("all-form")
    criarForm.action = "/tarefas/add-tarefa2"
    criarForm.method = "POST"
    $acessar_ul.appendChild(criarForm)


    const $acessar_form = document.querySelector(`.form-ul${j}`)
    const $acessarInput = document.querySelector('[data-form-input]');
    const valorInput = $acessarInput.value;
    tarefas.push(valorInput)
    console.log(tarefas)

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
        
        console.log(id.value)
        criarTarefaLi.setAttributeNode(id)

        const conteudo = `<p class="content">${valorInput}<p>`;

        criarTarefaLi.innerHTML = conteudo;
        criarTarefaLi.appendChild(criarInputIdBotao(id.value))
        criarTarefaLi.appendChild(criarInputPosicaoTarefa(valorInput,incremento))
        criarTarefaLi.appendChild(criarInputTarefa (valorInput,id.value))
        criarTarefaLi.appendChild(criarInput_id_random(random))
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
            tarefaFeita(e,id.value,contacliq)
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
            tarefas: valorInput,
            id: random
        })
        
        

        localStorage.setItem("tarefas_listadas", JSON.stringify(tarefas_listadas))
    }
        
}
        
// var myHeaders = new Headers();
// // var form = new FormData(document.querySelector('.form1994'))
// var myInit = { 
//                     method: 'POST',
//                     headers: myHeaders,
//                     mode: 'cors',
//                     cache: 'default',
//                     // body: form
//                     };

// fetch("/tarefas/add-tarefa",myInit)
//             .then((response) => {
//                 alert(response)
//                 console.log(response.json());
//                 console.log(response)
//             })
//             .catch(function(error) {
//                 console.log('There has been a problem with your fetch operation: ' + error.message);
//             });     

// var form = new FormData(document.querySelector('.form1994'))
// console.log(form)
//    fetch("/add-tarefa", {
//        method: 'POST',
//        body: form
//    }).then(function(response,req) {
//        console.log(response.json())
//        console.log(response.body);
//     })
//clica
//pega o id
//envia para o backend
$novaTarefa.addEventListener('click', criarTarefa);
// 'use strict'
// let ajax = new XMLHttpRequest()
// let params = valorInput
// ajax.open('POST','http://localhost:8081')
// ajax.onreadystatechange = function () {
//     console.log(ajax.responseText)
// }
// ajax.send()
// })(window,document)

// window.onload = function (){
//     var a = tarefas_listadas.length
//     j = tarefas_listadas[a].tarefas

// }
