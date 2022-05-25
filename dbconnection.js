var mysql = require('mysql');
//Creación de la variable 'dbcon' para la conexión con la DB
/*
Host -> localhost, dirección ip

Usuarios -> 
    para Windows: winarchitect, winmanager 
    para Linux: lnxarchitect, lnxmanager

Contraseñas-> 
    para Windows-> 
    winarchitect@localhost: Pass_001
    winarchitect@%: Pass_002
    winmanager@localhost: Pass_003
    para Linux -> 
    lnxarchitect@localhost: password01
    lnxarchitect@%: password02
    lnxmanager@localhost: password03
*/
var dbcon = mysql.createConnection({
    host: 'localhost',
    user: 'winarchitect', 
    password:'Pass_001',
    database: 'adminsystemdb'
});

//Conexión con la base de datos
dbcon.connect(function (err){
    if(err) throw err;
    console.log("Connected!");
})

module.exports = dbcon;