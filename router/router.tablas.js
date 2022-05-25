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

router.get('/almacenes',(req, res, next)=>{
    var sql = "SELECT * FROM almacenes;";
    conn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Almacenes desde /tablas/almacenes");
        res.render('view_almacenes', {titulopag: "Almacenes", datosConsulta:data});
    })
});

//Modificar desde aquí
router.get('/destinos',(req, res, next)=>{
    var sql = "SELECT * FROM destino_e;";
    conn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Destinos_e desde /tablas/destinos");
        res.render('view_destinos', {titulopag: "Destinos", datosConsulta:data});
    })
});

router.get('/envios',(req, res, next)=>{
    var sql = "SELECT * FROM envios;";
    conn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Envios desde /tablas/envios");
        res.render('view_envios', {titulopag: "Envios", datosConsulta:data});
    })
});

router.get('/facturas',(req, res, next)=>{
    var sql = "SELECT * FROM facturas;";
    conn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Facturas desde /tablas/facturas");
        res.render('view_facturas', {titulopag: "Facturas", datosConsulta:data});
    })
});

router.get('/origenes',(req, res, next)=>{
    var sql = "SELECT * FROM origen_e;";
    conn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
        res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
    })
});

router.get('/productos',(req, res, next)=>{
    var sql = "SELECT * FROM productos;";
    conn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Productos desde /tablas/productos");
        res.render('view_productos', {titulopag: "Productos", datosConsulta:data});
    })
});

router.get('/sueldos',(req, res, next)=>{
    var sql = "SELECT * FROM sueldos;";
    conn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Sueldos desde /tablas/Sueldos");
        res.render('view_sueldos', {titulopag: "Sueldos", datosConsulta:data});
    })
});

router.get('/trabajadores',(req, res, next)=>{
    var sql = "SELECT * FROM trabajadores;";
    conn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Trabajos desde /tablas/Trabajadores");
        res.render('view_trabajadores', {titulopag: "Trabajadores", datosConsulta:data});
    })
});

module.exports = router;