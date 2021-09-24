const myForm = document.getElementById('form-cadastro-login')

let arrayteste = []

var id = 0;

myForm.addEventListener('submit', function (e) {
    alert('ue')
    e.preventDefault()
    const $input_email = document.querySelector('#exampleInputEmail')
    const $input_password = document.querySelector('#exampleInputPassword')
    const valor_input = $input_email.value
    const valor_input_password = $input_password.value

    if((valor_input.length < 10) || valor_input_password.length < 5){
        return alert("Campo de cadastro incompleto!")
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
                    alert("Login inválido!")
                }
                else{
                    alert("Logado com sucesso! Redirecionando para a página de tarefas!")
                    console.log(data[0].id)
                    arrayteste.push(data)
                    console.log(arrayteste)
                    
                    id = data[0]['id']

                    fetch(`/tarefas/${data[0].email}/${data[0].id}`,{
                        method: 'GET',
                    }).then (response => {
                        console.log(response)
                        window.location.href = `tarefas/${data[0].email}/${data[0].id}`

                        
                        
                }
                        
                        
                    )         
                          
                    
                }
            }) 
        )
    }
    
})

module.exports = id;