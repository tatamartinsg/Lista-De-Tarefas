const myForm = document.getElementById('form-cadastro-login')

let arrayteste = []
const $pega_section = document.querySelector('.section-alert')
let mensg = 'Página de Login redirecionada com sucesso!'
var id = 0;

function geraAlertSucesso(params) {
    const cria_div_alert = document.createElement('div')
    $pega_section.appendChild(cria_div_alert)

    cria_div_alert.innerHTML = `
    <div class="alert alert-success" role="alert">
            ${params} <p class="spinner is-animating"></p>
    </div>`
    setTimeout(()=>{cria_div_alert.remove()},2500) 
}
geraAlertSucesso(mensg)


myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const $input_email = document.querySelector('#exampleInputEmail')
    const $input_password = document.querySelector('#exampleInputPassword')
    const valor_input = $input_email.value
    const valor_input_password = $input_password.value
    const $pega_section = document.querySelector('.section-alert')

    function  geraAlertErro(params) {
        const cria_div_alert = document.createElement('div')
        $pega_section.appendChild(cria_div_alert)

        cria_div_alert.innerHTML = `
        <div class="alert alert-danger"role="alert">${params}<p class="spinner is-animating"></p></div>`
        setTimeout(()=>{cria_div_alert.remove()},3000)
    }
    

    if(valor_input.length < 10){
        let mensagem = 'Email inexistente. O email precisa ter mais de 10 caracteres. Por favor insira outro email.'
        geraAlertErro(mensagem)
    }
    
    else if(valor_input_password.length < 5){
        let mensagem = 'Senha inexistente. A senha precisa ter ao mínimo 5 caracteres. Por favor digite outra senha.'
        geraAlertErro(mensagem)
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
                    geraAlertErro(mensagem)
                }
                else{
                    let mensagem = ' Login realizado com sucesso! Redirecionando para a Lista de Tarefas!' 
                    geraAlertSucesso(mensagem)

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