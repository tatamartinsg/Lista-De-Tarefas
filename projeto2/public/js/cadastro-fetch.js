const myForm = document.getElementById('form-cadastro')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const $input_email = document.querySelector('#exampleInputEmail')
    const $input_password = document.querySelector('#exampleInputPassword')
    const valor_input = $input_email.value
    const valor_input_password = $input_password.value

    if((valor_input.length < 10) || valor_input_password.length < 5){
        // const $section = document.querySelector('.container-fluid')
        
        // $section.innerHTML += '<div class="alert alert-danger" data-div>ue <button type="button" class="btn btn-danger" data-danger>X</button> </div>'
        return alert("Campo de cadastro incompleto!")
    }
    else{
        const formData = new FormData(this)
        const searchParams = new URLSearchParams()
        
        for (const pair of formData){
            searchParams.append(pair[0],pair[1])
        }

        fetch('/add-cadastro',{method: 'POST',body: searchParams
        })
        .then(response => response.json()
            .then(data => {
                if(data.emailExiste){
                     alert(`Email: ${data.emailExiste}, já existe!`)
                }
                else{
                    alert('Email cadastrado com sucesso!')
                    console.log(data)
                    window.location.href = '/login'

                    
                }
            })  
        )
    }
})










// const botao = document.querySelector('[data-form-button2]')

// botao.addEventListener('click', ()=> {
//     // document.querySelector('#form-cadastro').submit()
//     // let arrayCadastro = []
//     let form = new FormData (document.querySelector('#form-cadastro'))
//     const data = new URLSearchParams(form)

//     var myInit = { 
//                    method: 'POST',
//                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
//                    mode: 'cors',
//                    cache: 'default',
//                    body: data
//                 }
    
//      fetch('/add-cadastro',myInit)
//         .then(response => {
//             return response.json()
//         })
//         .then ( resposta => {
//             console.log(resposta)
//         })
//         .catch(function(error) {
//             console.log('There has been a problem with your fetch operation: ' + error.message);
//         });
// })
// let form = document.querySelector('#form-cadastro')
// let email = document.querySelector('#exampleInputEmail')
//     let pass = document.querySelector('#exampleInputPassword')

//     form.addEventListener('submit', (event)=>{
//         event.preventDefault()

//         let dados = {
//             email: email.value,
//             password: pass.value
//         }
//         // arrayCadastro.push(dados)
//         console.log(dados)
//         // console.log(arrayCadastro)

//         fetch('/add-cadastro',{
//             method: 'POST',
//             body: JSON.stringify(dados)
//         })
//         .then((response)=> {
//             response
//         })
//         .then((data)=> {
//             console.log(data)
//         })
//     })

    // const data = new URLSearchParams(new FormData(document.querySelector('#form-cadastro')))
