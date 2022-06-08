var mysql = require('mysql');

var sdbcon = mysql.createConnection({
    host: '25.56.141.220',
    user: 'winarchitect', 
    password:'Pass_002',
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