const conexao = require('../../infraestrutura/conexao')

class lastTaskSent{
    selectLastTaskSent(body,id_login,res){
        const sql_select_id = `SELECT * FROM cadastroTarefas WHERE id = (SELECT MAX(id) FROM cadastroTarefas); `
                conexao.query(sql_select_id, (erro_id,resultado_id)=>{
                    if(erro_id){
                        console.log("Deu erro ao selecionar o id: ", erro_id)
                    }
                    else{
                        // console.log("Id selecionado: ",resultado_id)
                        // atualizaTarefa(resultado_id,body,id_login,res)
                        
                        return this.atualizaTarefa()
                    }
     })
    }
    atualizaTarefa(resultado_id,body,id_login,res){
        console.log("oi")
    }
}

class attTarefa extends lastTaskSent{
    atualizaTarefa(){
        console.log("oi")
    }
}

module.exports = new attTarefa

