const conexao = require('../infraestrutura/conexao')

class Login{
    verificaLogin(body,res,teste2){
        console.log('body recebido:',body)
        const sql_select = `SELECT * FROM cadastroEmail WHERE email = '${body.email}' AND password = '${body.password}';`
        conexao.query(sql_select, (erro,mostraCadastros) => {
            if (erro){
                console.log("Deu erro ao selecionar os cadastros para confirmação do LOGIN: ",erro)
            }
            else{
                console.log("Resultado encontrado: ",mostraCadastros)
                let cadastroExiste = mostraCadastros.length
                if(cadastroExiste == 0 ){
                    console.log("Email e senha não existem, portanto não foram cadastrados")
                    const loginNaoExiste = {loginNaoExiste: body.email, senha: body.password}
                    res.json(loginNaoExiste)
                }
                else if (cadastroExiste == 1){
                    // console.log("Email e senha encontrados, a pessoa pode se logar!")    
                    // res.json(mostraCadastros)
                    // res.redirect('tarefas')
                    res.json(mostraCadastros)
                }
                else if (cadastroExiste > 1){
                    console.log("Erro ao logar, possuem dois cadastros iguais!")
                }
                // res.end()
                // res.write(mostraCadastros)
            }
        })
    }

}

module.exports = new Login