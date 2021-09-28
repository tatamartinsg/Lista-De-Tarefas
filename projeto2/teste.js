$pega_button = document.querySelector('.btn-lg')
$pega_div = document.querySelector('.div-principal')
$pega_section_welcome = document.querySelector('.section-principal')
$pega_body = document.querySelector('body')
$pega_body.classList.add('class-body2')

$pega_button.addEventListener('click',()=>{
    $pega_section_welcome.remove()
    $pega_body.classList.add('class-body')
    $pega_body.classList.remove('class-body2')
    $pega_section_welcome.classList.add('mudou-section')
    $pega_div.classList.add('criou')
    $pega_div.classList.add('clicou')
    $pega_section = document.querySelector('.section-secundaria')
    $pega_section.innerHTML += `
    <section class="container-fluid teste2">
        <section class="row justify-content-center teste2">
            <section class="col-12 col-sm-6 col-md-3 section-cadastro ">
            
                <form action="/login" method="GET" class="form-container " id="form-botao-login">
                
                    <h2 class="h2-form">Teste 2</h2>
                    <p>Escreva algo aqui!</p>
                    <div class="form-group2">
                        <button class="btn btn-primary btn-block" id="id-botao-login" data-form-button2>Login</button>
                    </div>
                </form>
                <form action="/cadastro" method="GET" class="form-container" id="form-botao-cadastro">
                    <div class="form-group2">
                        
                        <button class="btn btn-primary btn-block"   data-form-button2>Cadastrar</button>
                    </div>
                </form>
            </section>
        </section>
    </section>

    `
})

   