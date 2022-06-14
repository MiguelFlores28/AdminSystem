const express = require('express');
const router = express.Router();
const lconn = require('../localdbconnection.js');
const sconn = require('../serverdbconnection.js');

router.use(express.static(__dirname + "/public"));
router.use(express.static(__dirname + "/"));

router.get('/clientes',async (req, res, next)=>{
    var sql = "SELECT id_c, nombre_c, apepat_c, apemat_c, clave_pedidos, dir_destino FROM clientes INNER JOIN Destino_E ON clientes.id_d = Destino_E.id_d  ORDER BY id_c ASC;";
    
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) {throw err;}
            else{
                console.log("Resultado "+ JSON.stringify(data));
                console.log("Acceso a tabla clientes de envio desde /tablas/clientes");
                res.render('view_clientes', {titulopag: "clientes", datosConsulta:data});
            }
        })
    }
    else{
        lconn.query(sql, (err, data, fields) =>{
        if(err){throw err;}
        else{
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla clientes de envio desde /tablas/clientes");
            res.render('view_clientes', {titulopag: "clientes", datosConsulta:data});
        }
    })}
});

router.get('/almacenes',async (req, res, next)=>{
    var sql = "SELECT id_a, cap_total, cap_actual, dir_origen FROM almacenes INNER JOIN origen_e ON almacenes.id_o = origen_e.id_o;";
    
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla almacenes de envio desde /tablas/almacenes");
            res.render('view_almacenes', {titulopag: "almacenes", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla almacenes de envio desde /tablas/almacenes");
            res.render('view_almacenes', {titulopag: "almacenes", datosConsulta:data});
    })}
});

router.get('/destinos',async (req, res, next)=>{
    var sql = "SELECT * FROM destino_e;";
    
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla destinos de envio desde /tablas/destinos");
            res.render('view_destinos', {titulopag: "destinos", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla destinos de envio desde /tablas/destinos");
            res.render('view_destinos', {titulopag: "destinos", datosConsulta:data});
    })}
});

router.get('/envios',async (req, res, next)=>{
    var sql = "SELECT envios.id_e, envios.id_o, envios.id_d, dir_origen, dir_destino FROM envios INNER JOIN origen_e ON envios.id_o = origen_e.id_o INNER JOIN Destino_E ON envios.id_d = Destino_E.id_d  ORDER BY id_e ASC;";
    
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla envios de envio desde /tablas/envios");
            res.render('view_envios', {titulopag: "envios", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla envios de envio desde /tablas/envios");
            res.render('view_envios', {titulopag: "envios", datosConsulta:data});
    })}
});

router.get('/facturas',async (req, res, next)=>{
    var sql = "SELECT id_f, clave_pedidos,envios.id_e, nombre_c, apepat_c, apemat_c, nombre_p, productos.precio_p, dir_origen, dir_destino FROM facturas INNER JOIN clientes ON facturas.id_c = clientes.id_c INNER JOIN envios ON facturas.id_e = envios.id_e INNER JOIN productos ON facturas.id_p = productos.id_p INNER JOIN origen_e ON envios.id_o = origen_e.id_o INNER JOIN Destino_E ON envios.id_d = Destino_E.id_d ORDER BY id_f ASC;";
    
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla facturas de envio desde /tablas/facturas");
            res.render('view_facturas', {titulopag: "facturas", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla facturas de envio desde /tablas/facturas");
            res.render('view_facturas', {titulopag: "facturas", datosConsulta:data});
    })}
});

router.get('/origenes',async (req, res, next)=>{
    var sql = "SELECT * FROM origen_e;";
    
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
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
    var sql = "SELECT * FROM productos;";
    
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla productos de envio desde /tablas/productos");
            res.render('view_productos', {titulopag: "productos", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
        console.log("Acceso a tabla productos de envio desde /tablas/productos");
        res.render('view_productos', {titulopag: "productos", datosConsulta:data});
        })}
});

router.get('/sueldos',async (req, res, next)=>{
    var sql = "SELECT id_s, nombre_t, apepat_t, apemat_t, comision, trabajos_realizados, sueldo_estimado FROM sueldos INNER JOIN trabajadores ON  sueldos.id_t = trabajadores.id_t;";
    
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla sueldos de envio desde /tablas/sueldos");
            res.render('view_sueldos', {titulopag: "sueldos", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla sueldos de envio desde /tablas/sueldos");
            res.render('view_sueldos', {titulopag: "sueldos", datosConsulta:data});
    })}
});

router.get('/trabajadores',async (req, res, next)=>{
    var sql = "SELECT * FROM trabajadores;";
    
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla trabajadores de envio desde /tablas/trabajadores");
            res.render('view_trabajadores', {titulopag: "trabajadores", datosConsulta:data});
        })
    }else{
    lconn.query(sql, (err, data, fields) =>{
        if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla trabajadores de envio desde /tablas/trabajadores");
            res.render('view_trabajadores', {titulopag: "trabajadores", datosConsulta:data});
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
            console.log("Acceso a tabla productos de envio desde /tablas/productos");
            res.render('view_productosX', {titulopag: "productos", error: false, datosConsulta:data});
        })
    }else{
        res.render('view_productosX', {titulopag: "productos", error: true, msg:"Datos del servidor Linux inaccessibles, intente conectar con el servidor de Linux"});
        }
});

router.get('/F-productos2',async (req, res, next)=>{
    var sql = "SELECT * FROM productos2;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla productos de envio desde /tablas/productos");
            res.render('view_productosX', {titulopag: "productos", error: false, datosConsulta:data});
        })
    }else{
        res.render('view_productosX', {titulopag: "productos", error: true, msg:"Datos del servidor Linux inaccessibles, intente conectar con el servidor de Linux"});
        }
});

router.get('/F-facturas1',async (req, res, next)=>{
    var sql = "SELECT id_f, clave_pedidos,envios.id_e, nombre_c, apepat_c, apemat_c, nombre_p, productos.precio_p, dir_origen, dir_destino FROM facturas1 INNER JOIN clientes ON facturas1.id_c = clientes.id_c INNER JOIN envios ON facturas1.id_e = envios.id_e INNER JOIN productos ON facturas1.id_p = productos.id_p INNER JOIN origen_e ON envios.id_o = origen_e.id_o INNER JOIN Destino_E ON envios.id_d = Destino_E.id_d ORDER BY id_f ASC;";
    if(sconn.state === 'authenticated'){
        console.log("En el servidor");
        sconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla facturas desde /tablas/facturas1");
            res.render('view_facturasX', {titulopag: "facturas", error: false, datosConsulta:data});
        })
    }else{
        res.render('view_facturasX', {titulopag: "facturas", error: true, msg:"Datos del servidor Linux inaccessibles, intente conectar con el servidor de Linux"});
        }
});

router.get('/F-sueldos1',async (req, res, next)=>{
    var sql = "SELECT id_s, nombre_t, apepat_t, apemat_t, comision, trabajos_realizados, sueldo_estimado FROM sueldos1 INNER JOIN trabajadores ON  sueldos1.id_t = trabajadores.id_t;";
    if(lconn.state === 'authenticated'){
        console.log("En el servidor");
        lconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla sueldos desde /tablas/sueldos1");
            res.render('view_sueldosX', {titulopag: "sueldos", error: false, datosConsulta:data});
        })
    }else{
        res.render('view_sueldosX', {titulopag: "sueldos", error: true, msg:"Datos del servidor Linux inaccessibles, intente conectar con el servidor de Linux"});
        }
});
router.get('/F-clientes1',async (req, res, next)=>{
    var sql = "SELECT id_c, nombre_c, apepat_c, apemat_c, clave_pedidos, dir_destino FROM clientes INNER JOIN Destino_E ON clientes.id_d = Destino_E.id_d  ORDER BY id_c ASC;";
    if(lconn.state === 'authenticated'){
        console.log("En el servidor");
        lconn.query(sql, (err, data, fields) =>{
            if(err) throw err;
            console.log("Resultado "+ JSON.stringify(data));
            console.log("Acceso a tabla clientes desde /tablas/clientes1");
            res.render('view_clientesX', {titulopag: "clientes", error: false, datosConsulta:data});
        })
    }else{
        res.render('view_clientesX', {titulopag: "clientes", error: true, msg:"Datos del servidor Linux inaccessibles, intente conectar con el servidor de Linux"});
        }
});
module.exports = router;