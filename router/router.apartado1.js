const express = require('express');
const router = express.Router();
const conn = require('../dbconnection.js');

router.use(express.static(__dirname + "/public"))
router.use(express.static(__dirname + "/"));

router.get('/index1', (req, res, next) => {
    var sql = "sELECT * FROM emp";
    conn.query(sql, (err, data, fields) => {
        if(err) throw err;
        console.log("Resultado" + JSON.stringify(data));
        console.log("Acceso a index1 desde /Apartado1/index1");
    res.render('index1', {titulopag: "Hola Mundo", datosConsulta: data});
    });
    
});

module.exports = router;