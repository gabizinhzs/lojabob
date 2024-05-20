const express  = require('express') 
const app = express()

const alunoDB = require('./app2')


app.get('/usuarios', function(req,res){
    res.type("usuarios.html")
})



//Iniciar servidor
let serve = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    consoleog("Servidor iniciado em http://%s:&s", host,port)
})