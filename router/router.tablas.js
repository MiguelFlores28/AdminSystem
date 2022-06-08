const express = require('express');
const router = express.Router();
const lconn = require('../localdbconnection.js');
const sconn = require('../serverdbconnection.js');

router.use(express.static(__dirname + "/public"));
router.use(express.static(__dirname + "/"));

router.get('/clientes',async (req, res, next)=>{
    var sql = "SELECT id_c, nombre_c, apepat_c, apemat_c, clave_pedidos, dir_destino FROM Clientes INNER JOIN Destino_E ON Clientes.id_d = Destino_E.id_d  ORDER BY id_c ASC;";
    var sql2 = "SELECT id_c, nombre_c, apepat_c, apemat_c, clave_pedidos, dir_destino FROM Clientes INNER JOIN Destino_E ON Clientes.id_d = Destino_E.id_d  ORDER BY id_c ASC;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
            res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
        })
    }else(
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Local");
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
        res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
    }))
});

router.get('/almacenes',async (req, res, next)=>{
    var sql = "SELECT id_a, cap_total, cap_actual, dir_origen FROM Almacenes INNER JOIN Origen_E ON Almacenes.id_o = Origen_E.id_o;";
    var sql2 = "SELECT id_a, cap_total, cap_actual, dir_origen FROM Almacenes INNER JOIN Origen_E ON Almacenes.id_o = Origen_E.id_o;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
            res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
        })
    }else(
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Local");
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
        res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
    }))
});

//Modificar desde aquí
router.get('/destinos',async (req, res, next)=>{
    var sql = "SELECT * FROM Destino_E;";
    var sql2 = "SELECT * FROM Destino_E;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
            res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
        })
    }else(
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Local");
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
        res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
    }))
});

router.get('/envios',async (req, res, next)=>{
    var sql = "SELECT Envios.id_e, Envios.id_o, Envios.id_d, dir_origen, dir_destino FROM Envios INNER JOIN Origen_E ON Envios.id_o = Origen_E.id_o INNER JOIN Destino_E ON Envios.id_d = Destino_E.id_d  ORDER BY id_e ASC;";
    var sql2 = "SELECT Envios.id_e, Envios.id_o, Envios.id_d, dir_origen, dir_destino FROM Envios INNER JOIN Origen_E ON Envios.id_o = Origen_E.id_o INNER JOIN Destino_E ON Envios.id_d = Destino_E.id_d  ORDER BY id_e ASC;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
            res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
        })
    }else(
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Local");
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
        res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
    }))
});

router.get('/facturas',async (req, res, next)=>{
    var sql = "SELECT id_f, clave_pedidos,Envios.id_e, nombre_c, apepat_c, apemat_c, nombre_p, Productos.precio_p, dir_origen, dir_destino FROM Facturas INNER JOIN Clientes ON Facturas.id_c = Clientes.id_c INNER JOIN Envios ON Facturas.id_e = Envios.id_e INNER JOIN Productos ON Facturas.id_p = Productos.id_p INNER JOIN Origen_E ON Envios.id_o = Origen_e.id_o INNER JOIN Destino_E ON Envios.id_d = Destino_e.id_d ORDER BY id_f ASC;";
    var sql2 = "SELECT id_f, clave_pedidos,Envios.id_e, nombre_c, apepat_c, apemat_c, nombre_p, Productos.precio_p, dir_origen, dir_destino FROM Facturas INNER JOIN Clientes ON Facturas.id_c = Clientes.id_c INNER JOIN Envios ON Facturas.id_e = Envios.id_e INNER JOIN Productos ON Facturas.id_p = Productos.id_p INNER JOIN Origen_E ON Envios.id_o = Origen_e.id_o INNER JOIN Destino_E ON Envios.id_d = Destino_e.id_d ORDER BY id_f ASC;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
            res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
        })
    }else(
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Local");
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
        res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
    }))
});

router.get('/origenes',async (req, res, next)=>{
    var sql = "SELECT * FROM Origen_E;";
    var sql2 = "SELECT * FROM Origen_E;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
            res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
        })
    }else(
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Local");
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
        res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
    }))
});

router.get('/productos',async (req, res, next)=>{
    var sql = "SELECT * FROM Productos;";
    var sql2 = "SELECT * FROM Productos;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
            res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
        })
    }else(
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Local");
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
        res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
    }))
});

router.get('/sueldos',async (req, res, next)=>{
    var sql = "SELECT id_s, nombre_t, apepat_t, apemat_t, comision, trabajos_realizados, sueldo_estimado FROM Sueldos INNER JOIN Trabajadores ON  Sueldos.id_t = Trabajadores.id_t;";
    var sql2 = "SELECT id_s, nombre_t, apepat_t, apemat_t, comision, trabajos_realizados, sueldo_estimado FROM Sueldos INNER JOIN Trabajadores ON  Sueldos.id_t = Trabajadores.id_t;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
            res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
        })
    }else(
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Local");
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
        res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
    }))
});

router.get('/trabajadores',async (req, res, next)=>{
    var sql = "SELECT * FROM Trabajadores;";
    var sql2 = "SELECT * FROM Trabajadores;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
            res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
        })
    }else(
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Local");
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
        res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
    }))
    
});

module.exports = router;