const conexao = require('../infraestrutura/conexao')

class Cadastro {
    adicionaCadastro(cadastro,res){
        const clienteEhvalido = cadastro.password.length >= 5

        const validacoes = [
            {
                nome: 'senha',
                valido: clienteEhvalido,
                mensagem: 'A senha deve ter no mínimo 5 caracteres!'
            }
        ]

        const erros = validacoes.filter( campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros){
            console.log(erros)
            res.redirect('/cadastro')
        }
        else{
            console.log("Enviando para o banco de dados com sucesso!")
            const sql = `INSERT INTO cadastroTarefa SET ? `

            conexao.query(sql, cadastro, (erro,resultados) => {
                if(erro){
                    console.log(erro)
                }
                else{
                    console.log(resultados)
                    // console.log(res)
                }
            })
        } 
    }

    lista(res){
        const sql = 'SELECT * FROM cadastroTarefa'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                console.log("Lista erro:",erro)
            }
            else{
                console.log("Deu certo lista: ",resultados)
            }
        })
    }
    buscaPorId(id,res){
        const sql = `SELECT * FROM cadastroTarefa WHERE id=${id}`
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