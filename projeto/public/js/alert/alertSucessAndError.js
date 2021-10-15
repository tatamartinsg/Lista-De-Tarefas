const $pega_section = document.querySelector('.section-alert')

const AlertSucessfull = (params) => {
    const cria_div_alert = document.createElement('div')
    $pega_section.appendChild(cria_div_alert)

    cria_div_alert.innerHTML = `
    <div class="alert alert-success" role="alert">
            ${params} <p class="spinner is-animating"></p>
    </div>`
    setTimeout(()=>{cria_div_alert.remove()},3000)
}

const AlertError = (params) => {
    const cria_div_alert = document.createElement('div')
    $pega_section.appendChild(cria_div_alert)
    cria_div_alert.innerHTML = `
    <div class="alert alert-danger"role="alert">${params}<p class="spinner is-animating"></p></div>`
    setTimeout(()=>{cria_div_alert.remove()},3000)
}

export { AlertSucessfull, AlertError };