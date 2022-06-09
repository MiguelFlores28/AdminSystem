var mysql = require('mysql');

var sdbcon = mysql.createConnection({
    host: '192.168.1.101',
    user: 'lnxarchitect', 
    password:'password02',
    database: 'AdminSystemDB'
});

//Conexión con la base de datos
sdbcon.connect(function (err){
    try{
        if(err){ console.log("Fallo en la conexión a la base de datos de Linux, motivo del error: ", err);}
        else{console.log("Conectado a la base de datos del servidor linux!");}
    
    }
    catch(e){
        console.log(e)
    }
})

module.exports = sdbcon;