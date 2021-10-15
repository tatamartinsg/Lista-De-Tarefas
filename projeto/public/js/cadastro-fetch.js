import { AlertSucessfull, AlertError } from "./alert/alertSucessAndError.js"

const myForm = document.getElementById('form-cadastro')
var aux = 0
myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    
    const $input_email = document.querySelector('#exampleInputEmail')
    const $input_password = document.querySelector('#exampleInputPassword')
    const valor_input = $input_email.value
    const valor_input_password = $input_password.value
    

    if((valor_input.length < 10)){
        let mensagem = 'O email precisa ter mais de 10 caracteres. Por favor insira outro email.'
        AlertError(mensagem)
        
    }
    else if(valor_input_password.length < 5){
        let mensagem = 'A senha precisa ter ao mínimo 5 caracteres. Por favor escolha outra senha.'
        AlertError(mensagem)
    }
    else{
        const formData = new FormData(this)
        const searchParams = new URLSearchParams()
        
        for (const pair of formData){
            searchParams.append(pair[0],pair[1])
        }

        fetch('/add-cadastro',{method: 'POST',body: searchParams})
        .then(response => response.json()
            .then(data => {
                if(data.emailExiste){
                    let mensagem = 'Email existente, por favor digite outro email!'
                    AlertError(mensagem)
                }
                else{
                    let mensagem = 'Cadastro realizado com sucesso! Redirecionando à página de Login!'
                    AlertSucessfull(mensagem)
                    setTimeout(function(){ window.location.href = '/login' }, 5000);
                
                }
            })  
        )
    }
})
