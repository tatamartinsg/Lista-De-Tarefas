alert("entrou")
const formTarefa = document.getElementById('form-tarefas')

formTarefa.addEventListener('submit', function (e) {
    e.preventDefault()
    alert('clicou botao')
    const $input_tarefa = document.getElementById('tarefa-input')
    console.log($input_tarefa.value)
    const formDataTarefa = new FormData(this)
    const searchParamsTarefa = new URLSearchParams()
                    
    for (const pair of formDataTarefa){
        searchParamsTarefa.append(pair[0],pair[1])
    }

    fetch('/tarefas/add-tarefas',{
            method: 'POST',
            body: searchParamsTarefa
        }).then(response => response.json()
            .then(data => {
                console.log(data)
            })
        )
})