const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'sql10.freemysqlhosting.net',
    user:'sql10701770',
    password:'uh4Vi5Y7dZ',
    database:'sql10701770',
})

connection.connect()

//Inserir dados - insert into nometabela
function Inserir(lg,sn,mail) {
    let sql = "insert into users set ?"
    let dados = {login:lg,senha:sn,email:mail}

    connection.query(sql,dados, function(error,results,fields){
            if(error) throw error
            console.log("Cadastro com sucesso!")
})
}
    
//Selecionar dados por id - select nometabela
function selecionaPorId(id){
    let sql ="select * from users where id = ?"
    connection.query(sql,id,function(error,results,fields){
        if(error) throw error
        console.log("selecionando:" + results[0].id + ":" + results[0].login + ":" + results[0].email)
    })
}

//Selecionar todos os dados - select nometabela
