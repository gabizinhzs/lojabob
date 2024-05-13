const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"db2free.net",
    user:"fatecd",
    password:"c29dc661",
    database:"fatec-diadema"
});

connection.connect((err) => {
    if(err){
        console.error('Erro ao conectar ao banco de ddos:', err);
}
console.log('Conexão estabelecida com o banco de dados');
});

module.exports = connection;