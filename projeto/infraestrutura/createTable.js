class Tabelas{
    init(conexao){
        console.log('Tabelas foram chamadas!')
        this.conexao = conexao
        this.criarTabela()
    }

    criarTabela(){
        const sql = 'CREATE TABLE IF NOT EXISTS cadastroEmail (id int NOT NULL AUTO_INCREMENT, email varchar(50) NOT NULL, password varchar(20) NOT NULL, PRIMARY KEY(id));'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log("Tabela cadastroEmail criada com sucesso!")
            }
        })
    }
}

module.exports = new Tabelas