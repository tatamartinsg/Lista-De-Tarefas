const $botao= document.querySelector('[data-form-button2]');
const $botao2 = document.querySelector('.btn-primary')

$botao.addEventListener('click', ()=>{
    const pegaInputSenha = document.querySelector('[data-form-input2]')
    const valorInputSenha = pegaInputSenha.value
    if(valorInputSenha.length < 5){
        alert("A senha deve ter no mínimo 5 caracteres!")
    }
})



