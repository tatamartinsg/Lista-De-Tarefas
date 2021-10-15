
const criarInputTarefa = (valorInput) => {
    const criarInput = document.createElement('input')
    criarInput.name = `tarefaUM`
    criarInput.type = 'hidden'
    criarInput.value = valorInput
    criarInput.classList.add('all-input')

    return criarInput
}
const criarFormulario = (j) => {
    const criarForm = document.createElement('form')
    criarForm.classList.add(`form-ul${j}`)
    criarForm.classList.add("all-form")

    return criarForm
}

export { criarInputTarefa, criarFormulario };