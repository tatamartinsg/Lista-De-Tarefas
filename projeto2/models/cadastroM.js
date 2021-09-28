const conexao = require('../infraestrutura/conexao')

class Cadastro {
    verificaCadastro(cadastro,res){
        const sql = `SELECT * FROM cadastroEmail WHERE email = '${cadastro.email}';`

        conexao.query(sql, (erro, resultados_email) => {
            if(erro){
                console.log("Erro ao selecionar email: ",erro)
            }
            else{
                console.log("Selecionando email existente (ou nao existente): ",resultados_email)
                console.log(resultados_email.length)
                const existeEmail = resultados_email.length 
                if (existeEmail >= 1){
                    console.log(`Já existe um email com ${cadastro.email}`)
                    const emailExiste = {emailExiste: cadastro.email}
                    res.json(emailExiste)
                    
                }
                else{
                    console.log("Email sugerido está disponível para ser cadastrado!")
                    adicionaCadastro(cadastro,res)

                    function adicionaCadastro(cadastro,res){
                        const clienteEhvalido = cadastro.password.length >= 5
                        const validacoes = [
                            {
                                nome: 'senha',
                                valido: clienteEhvalido
                            }
                        ]
                
                        const erros = validacoes.filter( campo => !campo.valido)
                        const existemErros = erros.length
                
                        if(existemErros){
                            console.log(erros)
                            res.redirect('/cadastro')
                        }
                        else{
                            console.log("Adicionando os dados ao mySQL!")
                            const sql = `INSERT INTO cadastroEmail SET ? ;`
                
                            conexao.query(sql, cadastro, (erro,resultados) => {
                                if(erro){
                                    console.log(erro)
                                }
                                else{
                                    console.log("Enviando para o banco de dados com sucesso!")
                                    console.log(`Dados:\nemail: ${cadastro.email}\n senha:${cadastro.password}\n adicionados com sucesso!`)
                                    
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
                            })
                        } 
                    }
                }
            }
        })
    }
    
    buscaPorId(id,res){
        const sql = `SELECT * FROM cadastroEmail WHERE id=${id}`
        conexao.query(sql,(erro,resultados) => {
            if(erro){
                console.log("Erro ID = ",erro)
            }
            else{
                console.log('ID deu certo: ',resultados)
            }
        })
    }
}

module.exports = new Cadastro