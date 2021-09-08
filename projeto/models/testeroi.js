const conexao=  require('./bancoDeDados')

class roi {
    init(conexao){
        this.conexao = conexao
        this.criarAtendimentos()
        console.log('Tabelas foram chamadas!')
    }
    criarAtendimentos(){
    const sql = 'SELECT LAST_INSERT_ID()'
    this.conexao.query(sql,(erro) => {
        if(erro){
            console.log(erro)
        }
        else{
            console.log('Tabela de Atendimentos criada com sucesso!')
        }
    })
}
}

module.exports = new roi