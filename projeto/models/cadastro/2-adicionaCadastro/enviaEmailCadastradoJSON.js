const conexao = require('../../../infraestrutura/conexao.js')

module.exports = 
/* enviaEmailCadastroJSON só será chamado se adicionaCadastroAoBanco funcionar,
    se for chamado, enviaEmailCadastradoJSON seleciona o ultimo email adicionado 
    ao banco de dados e o envia em formato JSON

    @params{cadastro} => recebe o email que o usuário quer cadastrar
    @params{res} => res = response (para enviar em formato JSON)
*/
function enviaEmailCadastradoJSON(cadastro,res) {
    const sql_select_again = `SELECT * FROM cadastroEmail WHERE email = '${cadastro.email}';`
                conexao.query(sql_select_again, (erro,pegaDados)=>{
                    if(erro){
                        console.log("Deu erro ao selecionar de novo: ",erro)
                    }
                    else{
                        console.log(pegaDados)
                        res.json(pegaDados)
                       
                    }
                })
}