const conexao = require('../infraestrutura/conexao')
const adicionaCadastro = require('../bd/adicionaCadastro/adicionaCadastro')
/*   <summary> 
        class Cadastro serve para verificar se o email já existe e, também, para criar um cadastro e adicionar ao banco de dados
     </summary>
*/
class Cadastro {
    /*
        a função verificaCadastro identifica se o email que o usuário quer cadastrar já existe no banco de dados
        se não existir, a função adicionaCadastro será chamada e irá adicionar esses valores do email e senha no banco de dados

        @params{cadastro} recebe os valores do input email e input senha (password)
        @params{res} recebe o response do method post da rota /add-cadastro
    */
    verificaCadastro(cadastro,res){
        const sql = `SELECT * FROM cadastroEmail WHERE email = '${cadastro.email}';`

        conexao.query(sql, (erro, resultados_email) => {
            if(erro){
                console.log("Erro ao selecionar email: ",erro)
            }
            else{
                console.log("Selecionando email existente (ou nao existente): ",resultados_email)

                const existeEmail = resultados_email.length

                if (existeEmail >= 1){
                    console.log(`Já existe um email com ${cadastro.email}`)
                    const emailExiste = {emailExiste: cadastro.email}
                    res.json(emailExiste)
                    
                }
                else{
                    console.log("Email sugerido está disponível para ser cadastrado!")
                    adicionaCadastro(cadastro,res)
                }
            }
        })
    }
}

module.exports = new Cadastro