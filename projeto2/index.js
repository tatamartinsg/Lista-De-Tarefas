const requiresExpress = require('./config/requiresExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/createTable')
const TabelaTarefa = require('./infraestrutura/createTableTarefa')
conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }
    else{
        Tabelas.init(conexao)
        TabelaTarefa.init(conexao)

        const app = requiresExpress()
        

        app.listen(8081, ()=>{
            console.log("Servidor rodando na porta 8081!")
        })

        console.log('Conectado com sucesso!')
    }
})

