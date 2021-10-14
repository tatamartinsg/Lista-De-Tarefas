const myForm = document.getElementById('form-cadastro')


var aux = 0
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
    
    function geraAlertSucesso(params) {
        const cria_div_alert = document.createElement('div')
        $pega_section.appendChild(cria_div_alert)

        cria_div_alert.innerHTML = `
        <div class="alert alert-success" role="alert">
                ${params} <p class="spinner is-animating"></p>
        </div>`
    }

    if((valor_input.length < 10)){
        let mensagem = 'O email precisa ter mais de 10 caracteres. Por favor insira outro email.'
        geraAlertErro(mensagem)
        
    }
    else if(valor_input_password.length < 5){
        let mensagem = 'A senha precisa ter ao mínimo 5 caracteres. Por favor escolha outra senha.'
        geraAlertErro(mensagem)
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
                    geraAlertErro(mensagem)
                }
                else{
                    let mensagem = 'Cadastro realizado com sucesso! Redirecionando à página de Login!'
                    geraAlertSucesso(mensagem)
                    setTimeout(function(){ window.location.href = '/login' }, 5000);
                
                }
            })  
        )
    }
})
