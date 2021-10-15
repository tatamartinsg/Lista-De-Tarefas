const conexao = require('../../infraestrutura/conexao')
module.exports = function insertCodigoCadastro(id_login){
    const sql_insert = `INSERT INTO cadastroTarefas SET codigo_id = ${id_login}`
        conexao.query(sql_insert, (erro_insert,resultInsert) => {
                if(erro_insert){
                    return erro_insert;
                }
                else{
                    return 1;
                }
        })
}