const express = require('express');
const router = express.Router();
const lconn = require('../localdbconnection.js');
const sconn = require('../serverdbconnection.js');

router.use(express.static(__dirname + "/public"));
router.use(express.static(__dirname + "/"));

router.get('/clientes',(req, res, next)=>{
    var sql = "SELECT id_c, nombre_c, apepat_c, apemat_c, clave_pedidos, dir_destino FROM Clientes INNER JOIN Destino_E ON Clientes.id_d = Destino_E.id_d  ORDER BY id_c ASC;";
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Clientes desde /tablas/Clientes");
        res.render('view_clientes', {titulopag: "Clientes", datosConsulta:data});
    })
});

router.get('/almacenes',(req, res, next)=>{
    var sql = "SELECT id_a, cap_total, cap_actual, dir_origen FROM Almacenes INNER JOIN Origen_E ON Almacenes.id_o = Origen_E.id_o;";
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Almacenes desde /tablas/almacenes");
        res.render('view_almacenes', {titulopag: "Almacenes", datosConsulta:data});
    })
});

//Modificar desde aquí
router.get('/destinos',(req, res, next)=>{
    var sql = "SELECT * FROM Destino_E;";
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Destinos_e desde /tablas/destinos");
        res.render('view_destinos', {titulopag: "Destinos", datosConsulta:data});
    })
});

router.get('/envios',(req, res, next)=>{
    var sql = "SELECT Envios.id_e, Envios.id_o, Envios.id_d, dir_origen, dir_destino FROM Envios INNER JOIN Origen_E ON Envios.id_o = Origen_E.id_o INNER JOIN Destino_E ON Envios.id_d = Destino_E.id_d  ORDER BY id_e ASC;";
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Envios desde /tablas/envios");
        res.render('view_envios', {titulopag: "Envios", datosConsulta:data});
    })
});

router.get('/facturas',(req, res, next)=>{
    var sql = "SELECT id_f, clave_pedidos,Envios.id_e, nombre_c, apepat_c, apemat_c, nombre_p, Productos.precio_p, dir_origen, dir_destino FROM Facturas INNER JOIN Clientes ON Facturas.id_c = Clientes.id_c INNER JOIN Envios ON Facturas.id_e = Envios.id_e INNER JOIN Productos ON Facturas.id_p = Productos.id_p INNER JOIN Origen_E ON Envios.id_o = Origen_e.id_o INNER JOIN Destino_E ON Envios.id_d = Destino_e.id_d ORDER BY id_f ASC;";
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Facturas desde /tablas/facturas");
        res.render('view_facturas', {titulopag: "Facturas", datosConsulta:data});
    })
});

router.get('/origenes',(req, res, next)=>{
    var sql = "SELECT * FROM Origen_E;";
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
        res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
    })
});

router.get('/productos',(req, res, next)=>{
    var sql = "SELECT * FROM Productos;";
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Productos desde /tablas/productos");
        res.render('view_productos', {titulopag: "Productos", datosConsulta:data});
    })
});

router.get('/sueldos',(req, res, next)=>{
    var sql = "SELECT id_s, nombre_t, apepat_t, apemat_t, comision, trabajos_realizados, sueldo_estimado FROM Sueldos INNER JOIN Trabajadores ON  Sueldos.id_t = Trabajadores.id_t;";
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Sueldos desde /tablas/Sueldos");
        res.render('view_sueldos', {titulopag: "Sueldos", datosConsulta:data});
    })
});

router.get('/trabajadores',(req, res, next)=>{
    var sql = "SELECT * FROM Trabajadores;";

    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Trabajos desde /tablas/Trabajadores");
        res.render('view_trabajadores', {titulopag: "Trabajadores", datosConsulta:data});
    })
    
});

module.exports = router;