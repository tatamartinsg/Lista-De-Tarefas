class TabelaTarefa{
    init(conexao){
        this.conexao = conexao
        this.criarTabela()
    }

    criarTabela(){
        const sql = 'CREATE TABLE IF NOT EXISTS cadastroTarefas (id int NOT NULL AUTO_INCREMENT, tarefas varchar(50), status varchar(20), codigo_id int NOT NULL ,PRIMARY KEY(id), FOREIGN KEY (codigo_id) REFERENCES cadastroEmail(id));'

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log("Tabela cadastroTarefas criado com sucesso")
            }
        })
    }
}
    

module.exports = new TabelaTarefa