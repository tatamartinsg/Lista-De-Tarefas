// const $botao= document.querySelector('[data-form-button2]');
// const $botao2 = document.querySelector('.btn-primary')

// $botao2.addEventListener('click', (event) => {
//     const pegaInputSenha = document.querySelector('[data-form-input2]')
//     const valorInputSenha = pegaInputSenha.value
//     if(valorInputSenha.length < 5){
//         alert("A senha deve ter no mínimo 5 caracteres!")
//         window.location.reload()
//     }
// })

const selec_button = document.querySelector('[data-danger]')
selec_button.addEventListener('click', (event) => {
    var pegaevento = event.target
    var paievento = pegaevento.parentElement
    paievento.remove()
})