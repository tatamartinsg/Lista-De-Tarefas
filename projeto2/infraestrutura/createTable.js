class Tabelas{
    init(conexao){
        console.log('Tabelas foram chamadas!')
        this.conexao = conexao
        this.criarTabela()
    }

    criarTabela(){
        const sql = 'CREATE TABLE IF NOT EXISTS cadastroTarefa (id int NOT NULL AUTO_INCREMENT, email varchar(50) NOT NULL, password varchar(20) NOT NULL, tarefaUM text, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log("Tabela cadastroTarefa criado com sucesso")
            }
        })
    }
}

module.exports = new Tabelas