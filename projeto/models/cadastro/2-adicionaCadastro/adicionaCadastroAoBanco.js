const conexao = require('../../../infraestrutura/conexao.js')
const enviaEmailCadastradoJSON = require('./enviaEmailCadastradoJSON.js')
/*
    A função adicionaCadastro é chamada se o valor do input email não existir no banco de dados,
    dessa forma, criará um cadastro com esse email, o adicionando no banco
*/
module.exports = 

function adicionaCadastroAoBanco(cadastro,res){

        console.log("Adicionando os dados ao mySQL!")
        const sql = `INSERT INTO cadastroEmail SET ? ;`
        conexao.query(sql, cadastro, (erro,resultados) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log("Enviando para o banco de dados com sucesso!")
                console.log(`Dados:\nemail: ${cadastro.email}\n senha:${cadastro.password}\n adicionados com sucesso!`)

                enviaEmailCadastradoJSON(cadastro,res)
            }
        })
}
