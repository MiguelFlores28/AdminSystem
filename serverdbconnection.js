/*var mysql = require('mysql');

var sdbcon = mysql.createConnection({
    host: '172.16.112.202',
    user: 'lnxarchitect', 
    password:'password02',
    database: 'AdminSystemDB'
});

//Conexión con la base de datos
sdbcon.connect(function (err){
    if(err) throw err;
    console.log("Conectado a la base de datos del servidor linux!");
})

module.exports = sdbcon;/*