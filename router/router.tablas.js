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
            if(err) {throw err;}
            else{
                console.log("Resultado "+ JSON.stringify(data));
                console.log("Acceso a tabla Clientes de envio desde /tablas/clientes");
                res.render('view_clientes', {titulopag: "Clientes", datosConsulta:data});
            }
        })
    }
    else{
        lconn.query(sql, (err, data, fields) =>{
        if(err){throw err;}
        else{
            console.log("Local");
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Clientes de envio desde /tablas/clientes");
            res.render('view_clientes', {titulopag: "clientes", datosConsulta:data});
        }
    })}
});

router.get('/almacenes',async (req, res, next)=>{
    var sql = "SELECT id_a, cap_total, cap_actual, dir_origen FROM Almacenes INNER JOIN Origen_E ON Almacenes.id_o = Origen_E.id_o;";
    var sql2 = "SELECT id_a, cap_total, cap_actual, dir_origen FROM Almacenes INNER JOIN Origen_E ON Almacenes.id_o = Origen_E.id_o;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla almacenes de envio desde /tablas/almacenes");
            res.render('view_almacenes', {titulopag: "Almacenes", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla almacenes de envio desde /tablas/almacenes");
            res.render('view_almacenes', {titulopag: "Almacenes", datosConsulta:data});
    })}
});

router.get('/destinos',async (req, res, next)=>{
    var sql = "SELECT * FROM Destino_E;";
    var sql2 = "SELECT * FROM Destino_E;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Destinos de envio desde /tablas/destinos");
            res.render('view_destinos', {titulopag: "Destinos", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Destinos de envio desde /tablas/destinos");
            res.render('view_destinos', {titulopag: "Destinos", datosConsulta:data});
    })}
});

router.get('/envios',async (req, res, next)=>{
    var sql = "SELECT Envios.id_e, Envios.id_o, Envios.id_d, dir_origen, dir_destino FROM Envios INNER JOIN Origen_E ON Envios.id_o = Origen_E.id_o INNER JOIN Destino_E ON Envios.id_d = Destino_E.id_d  ORDER BY id_e ASC;";
    var sql2 = "SELECT Envios.id_e, Envios.id_o, Envios.id_d, dir_origen, dir_destino FROM Envios INNER JOIN Origen_E ON Envios.id_o = Origen_E.id_o INNER JOIN Destino_E ON Envios.id_d = Destino_E.id_d  ORDER BY id_e ASC;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Envios de envio desde /tablas/Envios");
            res.render('view_envios', {titulopag: "Envios", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Envios de envio desde /tablas/Envios");
            res.render('view_envios', {titulopag: "Envios", datosConsulta:data});
    })}
});

router.get('/facturas',async (req, res, next)=>{
    var sql = "SELECT id_f, clave_pedidos,Envios.id_e, nombre_c, apepat_c, apemat_c, nombre_p, Productos.precio_p, dir_origen, dir_destino FROM Facturas INNER JOIN Clientes ON Facturas.id_c = Clientes.id_c INNER JOIN Envios ON Facturas.id_e = Envios.id_e INNER JOIN Productos ON Facturas.id_p = Productos.id_p INNER JOIN Origen_E ON Envios.id_o = Origen_E.id_o INNER JOIN Destino_E ON Envios.id_d = Destino_E.id_d ORDER BY id_f ASC;";
    var sql2 = "SELECT id_f, clave_pedidos,Envios.id_e, nombre_c, apepat_c, apemat_c, nombre_p, Productos.precio_p, dir_origen, dir_destino FROM Facturas INNER JOIN Clientes ON Facturas.id_c = Clientes.id_c INNER JOIN Envios ON Facturas.id_e = Envios.id_e INNER JOIN Productos ON Facturas.id_p = Productos.id_p INNER JOIN Origen_E ON Envios.id_o = Origen_E.id_o INNER JOIN Destino_E ON Envios.id_d = Destino_E.id_d ORDER BY id_f ASC;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Facturas de envio desde /tablas/facturas");
            res.render('view_facturas', {titulopag: "Facturas", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Facturas de envio desde /tablas/facturas");
            res.render('view_facturas', {titulopag: "Facturas", datosConsulta:data});
    })}
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
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Local");
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Origenes de envio desde /tablas/origenes");
        res.render('view_origenes', {titulopag: "Origenes", datosConsulta:data});
    })}
});

router.get('/productos',async (req, res, next)=>{
    var sql = "SELECT * FROM Productos;";
    var sql2 = "SELECT * FROM Productos;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Productos de envio desde /tablas/productos");
            res.render('view_productos', {titulopag: "Productos", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla Productos de envio desde /tablas/productos");
        res.render('view_productos', {titulopag: "Productos", datosConsulta:data});
        })}
});

router.get('/sueldos',async (req, res, next)=>{
    var sql = "SELECT id_s, nombre_t, apepat_t, apemat_t, comision, trabajos_realizados, sueldo_estimado FROM Sueldos INNER JOIN Trabajadores ON  Sueldos.id_t = Trabajadores.id_t;";
    var sql2 = "SELECT id_s, nombre_t, apepat_t, apemat_t, comision, trabajos_realizados, sueldo_estimado FROM Sueldos INNER JOIN Trabajadores ON  Sueldos.id_t = Trabajadores.id_t;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Sueldos de envio desde /tablas/sueldos");
            res.render('view_sueldos', {titulopag: "Sueldos", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Sueldos de envio desde /tablas/sueldos");
            res.render('view_sueldos', {titulopag: "Sueldos", datosConsulta:data});
    })}
});

router.get('/trabajadores',async (req, res, next)=>{
    var sql = "SELECT * FROM Trabajadores;";
    var sql2 = "SELECT * FROM Trabajadores;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql2, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Trabajadores de envio desde /tablas/trabajadores");
            res.render('view_trabajadores', {titulopag: "Trabajadores", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Trabajadores de envio desde /tablas/trabajadores");
            res.render('view_trabajadores', {titulopag: "Trabajadores", datosConsulta:data});
    })}
    
});

//Sección de las vistas correspondientes a la fragmentación 

router.get('/F-productos1',async (req, res, next)=>{
    var sql = "SELECT * FROM productos1;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Productos de envio desde /tablas/productos");
            res.render('view_productosX', {titulopag: "Productos", error: false, datosConsulta:data});
        })
    }else{
        res.render('view_productosX', {titulopag: "Productos", error: true, msg:"Datos del servidor Linux inaccessibles, intente conectar con el servidor de Linux"});
        }
});

router.get('/F-productos2',async (req, res, next)=>{
    var sql = "SELECT * FROM productos2;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Productos de envio desde /tablas/productos");
            res.render('view_productosX', {titulopag: "Productos", error: false, datosConsulta:data});
        })
    }else{
        res.render('view_productosX', {titulopag: "Productos", error: true, msg:"Datos del servidor Linux inaccessibles, intente conectar con el servidor de Linux"});
        }
});

router.get('/F-facturas1',async (req, res, next)=>{
    var sql = "SELECT id_f, clave_pedidos,Envios.id_e, nombre_c, apepat_c, apemat_c, nombre_p, Productos.precio_p, dir_origen, dir_destino FROM facturas1 INNER JOIN Clientes ON facturas1.id_c = Clientes.id_c INNER JOIN Envios ON facturas1.id_e = Envios.id_e INNER JOIN Productos ON facturas1.id_p = Productos.id_p INNER JOIN Origen_E ON Envios.id_o = Origen_E.id_o INNER JOIN Destino_E ON Envios.id_d = Destino_E.id_d ORDER BY id_f ASC;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Facturas desde /tablas/facturas1");
            res.render('view_facturasX', {titulopag: "Facturas", error: false, datosConsulta:data});
        })
    }else{
        res.render('view_facturasX', {titulopag: "Facturas", error: true, msg:"Datos del servidor Linux inaccessibles, intente conectar con el servidor de Linux"});
        }
});

router.get('/F-sueldos1',async (req, res, next)=>{
    var sql = "SELECT id_s, nombre_t, apepat_t, apemat_t, comision, trabajos_realizados, sueldo_estimado FROM sueldos1 INNER JOIN Trabajadores ON  sueldos1.id_t = Trabajadores.id_t;";
    if(lconn.state === 'authenticated'){
        console.log("En el servidor");
        lconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Sueldos desde /tablas/sueldos1");
            res.render('view_sueldosX', {titulopag: "Sueldos", error: false, datosConsulta:data});
        })
    }else{
        res.render('view_sueldosX', {titulopag: "Sueldos", error: true, msg:"Datos del servidor Linux inaccessibles, intente conectar con el servidor de Linux"});
        }
});
router.get('/F-clientes1',async (req, res, next)=>{
    var sql = "SELECT id_c, nombre_c, apepat_c, apemat_c, clave_pedidos, dir_destino FROM Clientes INNER JOIN Destino_E ON Clientes.id_d = Destino_E.id_d  ORDER BY id_c ASC;";
    if(lconn.state === 'authenticated'){
        console.log("En el servidor");
        lconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla Clientes desde /tablas/clientes1");
            res.render('view_clientesX', {titulopag: "Clientes", error: false, datosConsulta:data});
        })
    }else{
        res.render('view_ClientesX', {titulopag: "Clientes", error: true, msg:"Datos del servidor Linux inaccessibles, intente conectar con el servidor de Linux"});
        }
});
module.exports = router;