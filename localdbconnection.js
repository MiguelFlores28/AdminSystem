var mysql = require('mysql');

var ldbcon = mysql.createConnection({
    host: 'localhost',
    user: 'winarchitect', 
    password:'Pass_001',
    database: 'AdminSystemDB'
});

//Conexión con la base de datos
ldbcon.connect(function (err){
    if(err) throw err;
    console.log("Connectado a la base de datos local de Windows!");
})

module.exports = ldbcon;