const requiresExpress = require('./config/requiresExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/createTable')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }
    else{
        Tabelas.init(conexao)
        const app = requiresExpress()
        

        app.listen(8081, ()=>{
            console.log("Servidor rodando na porta 8081!")
        })

        console.log('Conectado com sucesso!')
    }
})

