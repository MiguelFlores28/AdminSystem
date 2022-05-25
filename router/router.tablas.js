const express = require('express');
const router = express.Router();
const conn = require('../dbconnection.js');

router.use(express.static(__dirname + "/public"));
router.use(express.static(__dirname + "/"));

router.get('/clientes',(req, res, next)=>{
    var sql = "SELECT * FROM clientes;";
    conn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Clientes desde /tablas/Clientes");
        res.render('view_clientes', {titulopag: "Clientes", datosConsulta:data});
    })
});
module.exports = router;