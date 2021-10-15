import { AlertSucessfull, AlertError } from "./alert/alertSucessAndError.js"
const myForm = document.getElementById('form-cadastro-login')

var id = 0;
let mensg = 'Página de Login redirecionada com sucesso!'
AlertSucessfull(mensg)


myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const $input_email = document.querySelector('#exampleInputEmail')
    const $input_password = document.querySelector('#exampleInputPassword')
    const valor_input = $input_email.value
    const valor_input_password = $input_password.value
    

    if(valor_input.length < 10){
        let mensagem = 'Email inexistente. O email precisa ter mais de 10 caracteres. Por favor insira outro email.'
        AlertError(mensagem)
    }
    
    else if(valor_input_password.length < 5){
        let mensagem = 'Senha inexistente. A senha precisa ter ao mínimo 5 caracteres. Por favor digite outra senha.'
        AlertError(mensagem)
    }
    else{
        const formData = new FormData(this)
        const searchParams = new URLSearchParams()
    
        for (const pair of formData){
            searchParams.append(pair[0],pair[1])
        }

        fetch('/add-login',{
            method: 'POST',
            body: searchParams
        }).then(response => response.json()
            .then(data => {
                if(data.loginNaoExiste){
                    let mensagem = 'Login inexistente! Por favor tente de novo.'
                    AlertError(mensagem)
                }
                else{
                    let mensagem = ' Login realizado com sucesso! Redirecionando para a Lista de Tarefas!' 
                    AlertSucessfull(mensagem)

                    id = data[0]['id']

                    fetch(`/tarefas/${data[0].email}/${data[0].id}`,{
                        method: 'GET',
                    }).then (response => {
                            console.log(response)
                            setTimeout(function(){ 
                                window.location.href = `tarefas/${data[0].email}/${data[0].id}`
                            }, 3000);
                        })         
                    }
            }) 
        )
    }
    
})

module.exports = id;