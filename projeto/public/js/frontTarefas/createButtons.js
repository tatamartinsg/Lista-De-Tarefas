//=============== Cria o botão concluir ============== //
const BotaoConcluir = (id) =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.classList.add(`check-button${id}`)
    botaoConclui.innerHTML = 'Concluir'
    var contacliq = 0

    botaoConclui.addEventListener('click', function (e) {
        contacliq += 1
        const pegaTarefa = e.target;
        const tarefaConcluida = pegaTarefa.parentElement;
        tarefaConcluida.classList.toggle('done');
   
    })
    const buton = document.querySelector(`check-button${id}`)

    return botaoConclui;
 }
//============= Criar botao deleta =============//
const BotaoDeletar = (id) => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.classList.add(`delete-button${id}`);
    botaoDeleta.setAttribute("id",`btn${id}`)
    botaoDeleta.innerText = "Deletar"

    return botaoDeleta;
}

//========== Quando clicar no botão deletar ========== //
const ClicarBotaoDelete = (id) => {
    const $delete_button = document.querySelector(`.delete-button${id}`)
    console.log("oi,", $delete_button)

    //=========== Deleta Form ao CLicar no Botão!!! ===========//
    $delete_button.addEventListener('click', () => {
        const form = document.querySelector(`.form-ul${id}`)
        form.remove()
    })
}


export { BotaoConcluir, BotaoDeletar, ClicarBotaoDelete };