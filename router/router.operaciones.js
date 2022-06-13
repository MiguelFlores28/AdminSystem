const express = require('express');
const router = express.Router();
const lconn = require('../localdbconnection.js');
const sconn = require('../serverdbconnection.js');

router.use(express.static(__dirname + "/public"));
router.use(express.static(__dirname + "/"));


router.get('/altas',(req, res, next)=>{
        res.render('view_insertar');
});
router.get('/bajas',(req, res, next)=>{
        res.render('view_eliminar');
});
router.get('/cambios',(req, res, next)=>{
        res.render('view_modificar');
});
router.get('/fragmentar',(req, res, next)=>{
        res.render('view_fragmento', {titulo: 'fragmentar'});
});

router.post('/altas', async (req, res, datos) =>{
        const body = req.body;
        var sql = "";
        var sql2 = "";
        switch(body.btn_valor){
                case "almacenes":
                        sql = "INSERT INTO "+ body.btn_valor 
                         + "(cap_total, cap_actual, id_o) VALUES ("
                         +body.cap_total+", "+body.cap_actual+", "+body.id_o+");"
                         sql2 = "INSERT INTO "+ body.btn_valor 
                         + "(cap_total, cap_actual, id_o) VALUES ("
                         +body.cap_total+", "+body.cap_actual+", "+body.id_o+");"
                        break;

                case "clientes":
                        sql = "INSERT INTO " + body.btn_valor 
                        + "(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ('"
                        +body.nombre_c+ "', '"+body.apepat_c+ "', '"+body.apemat_c+ "', '"+body.clave_pedidos+ "', "+body.id_d+");"
                        sql2 = "INSERT INTO " + body.btn_valor 
                        + "(nombre_c, apepat_c, apemat_c, clave_pedidos, id_d) VALUES ("
                        +body.nombre_c+ "', '"+body.apepat_c+ "', '"+body.apemat_c+ "', '"+body.clave_pedidos+ "', "+body.id_d+");"
                        break;

                case "productos":
                        sql = "INSERT INTO " + body.btn_valor 
                        + "(nombre_p, descripcion_p, precio_p, stock_p) VALUES ("
                        +body.id_a+ ", '"+body.nombre_p+ "', '"+body.descripcion_p+ "', "+body.precio_p+ ", "+body.stock_p+");"
                        sql2 = "INSERT INTO " + body.btn_valor 
                        + "(nombre_p, descripcion_p, precio_p, stock_p) VALUES ("
                        +body.id_a+ ", '"+body.nombre_p+ "', '"+body.descripcion_p+ "', "+body.precio_p+ ", "+body.stock_p+");"
                        break;

                case "origen_e":
                        sql = "INSERT INTO " + body.btn_valor + "(dir_origen) VALUES ('"+body.dir_origen+"');"
                        sql2 = "INSERT INTO " + body.btn_valor + "(dir_origen) VALUES ('"+body.dir_origen+"');"
                        break;

                case "facturas":
                        sql = "INSERT INTO " + body.btn_valor 
                        + "(id_c, id_p, cant, precio_p, total, id_e) VALUES ("
                        +body.id_c+ ", '"+body.id_p+ "', "+body.cant+ ", "+body.precio_p+ ", "+body.total+ ", "+body.id_e+");"
                        sql2 = "INSERT INTO " + body.btn_valor 
                        + "(id_c, id_p, cant, precio_p, total, id_e) VALUES ("
                        +body.id_c+ ", '"+body.id_p+ "', "+body.cant+ ", "+body.precio_p+ ", "+body.total+ ", "+body.id_e+");"
                        break;

                case "destino_e":
                        sql = "INSERT INTO " + body.btn_valor + "( dir_destino) VALUES ('"+body.dir_destino+"');"
                        sql2 = "INSERT INTO " + body.btn_valor + "( dir_destino) VALUES ('"+body.dir_destino+"');"
                        break;

                case "envios":
                        sql = "INSERT INTO " + body.btn_valor + "(id_o, id_d) VALUES ("+body.id_o+ ", "+body.id_d+");"
                        sql2 = "INSERT INTO " + body.btn_valor + "(id_o, id_d) VALUES ("+body.id_o+ ", "+body.id_d+");"
                        break;

                case "trabajadores":
                        sql = "INSERT INTO " + body.btn_valor + "(nombre_t, apepat_t, apemat_t) VALUES ('"
                        +body.nombre_t+ "', '"+body.apepat_t+ "', '"+body.apemat_t+"');"
                        sql2 = "INSERT INTO " + body.btn_valor + "(nombre_t, apepat_t, apemat_t) VALUES ('"
                        +body.nombre_t+ "', '"+body.apepat_t+ "', '"+body.apemat_t+"');"
                        break;

                case "sueldos":
                        sql = "INSERT INTO " + body.btn_valor + "(id_t, comision, trabajos_realizados, sueldo_estimado) VALUES ("
                        +body.id_t+ ", "+body.comision+ ", "+body.trabajos_realizados+ ", "+body.sueldo_estimado+");"
                        sql2 = "INSERT INTO " + body.btn_valor + "(id_t, comision, trabajos_realizados, sueldo_estimado) VALUES ("
                        +body.id_t+ ", "+body.comision+ ", "+body.trabajos_realizados+ ", "+body.sueldo_estimado+");"
                        break;
        }
        console.log("Llegó");
        console.log(body);
        lconn.query(sql, (err, data, fields) =>{
                if(err) throw err;
                console.log("Resultado "+ JSON.stringify(data));
                res.render('view_insertar', {titulopag: "Altas"});
        })
        if(sconn.state === 'authenticated'){
                console.log("Si jala");
                sconn.query(sql2, (err, data, fields) =>{
                if(err) throw err;
                console.log("Resultado "+ JSON.stringify(data));  
        })
        }
    });

    router.post('/bajas', async (req, res, datos) =>{
        const body = req.body;

        console.log(body);
        var sql = "";
        var sql2 = "";
        switch(body.btn_valor){
                case "almacenes":
                        sql="DELETE FROM "+ body.btn_valor+" WHERE id_a="+body.id_a+";";
        sql2="DELETE FROM "+ body.btn_valor+" WHERE id_a="+body.id_a+";"
                        break;

                case "clientes":
                        sql="DELETE FROM "+ body.btn_valor+" WHERE id_c="+body.id_c+";";
        sql2="DELETE FROM "+ body.btn_valor+" WHERE id_c="+body.id_c+";"
                        break;

                case "productos":
                        sql="DELETE FROM "+ body.btn_valor+" WHERE id_p="+body.id_p+";";
        sql2="DELETE FROM "+ body.btn_valor+" WHERE id_p="+body.id_p+";"
                        break;

                case "origen_e":
                        sql="DELETE FROM "+ body.btn_valor+" WHERE id_o="+body.id_o+";";
        sql2="DELETE FROM "+ body.btn_valor+" WHERE id_o="+body.id_o+";"
                        break;

                case "facturas":
                        sql="DELETE FROM "+ body.btn_valor+" WHERE id_f="+body.id_f+";";
        sql2="DELETE FROM "+ body.btn_valor+" WHERE id_f="+body.id_f+";"
                        break;

                case "destino_e":
                        sql="DELETE FROM "+ body.btn_valor+" WHERE id_d="+body.id_d+";";
        sql2="DELETE FROM "+ body.btn_valor+" WHERE id_d="+body.id_d+";"
                        break;

                case "envios":
                        sql="DELETE FROM "+ body.btn_valor+" WHERE id_e="+body.id_e+";";
        sql2="DELETE FROM "+ body.btn_valor+" WHERE id_e="+body.id_e+";"
                        break;

                case "trabajadores":
                        sql="DELETE FROM "+ body.btn_valor+" WHERE id_t="+body.id_t+";";
        sql2="DELETE FROM "+ body.btn_valor+" WHERE id_t="+body.id_t+";"
                        break;

                case "sueldos":
                        sql="DELETE FROM "+ body.btn_valor+" WHERE id_s="+body.id_s+";";
        sql2="DELETE FROM "+ body.btn_valor+" WHERE id_s="+body.id_s+";"
                        break;
        }
        
        lconn.query(sql, (err, data, fields) =>{
                if(err) throw err;
                console.log("Resultado "+ JSON.stringify(data));
                res.render('view_eliminar', {titulopag: "Bajas"});
        })
        if(sconn.state === 'authenticated'){
                sconn.query(sql2, (err, data, fields) =>{
                        if(err) throw err;
                        console.log("Resultado "+ JSON.stringify(data));
                        
                })
        }
    });

    router.post('/cambios', async (req, res, datos) =>{
        const body = req.body;
        var sql = "";
        var sql2 = "";
        switch(body.btn_valor){
                case "almacenes":
                        sql= "UPDATE " + body.btn_valor + 
                        " SET cap_total = "+body.cap_total +", cap_actual = "+body.cap_actual+", id_o="+body.id_o+
                        " WHERE id_a= "+body.id_modificar+";";       
                        sql2= "UPDATE " + body.btn_valor + 
                        " SET cap_total = "+body.cap_total +", cap_actual = "+body.cap_actual+", id_o="+body.id_o+
                        " WHERE id_a= "+body.id_modificar+";";       
                        break;

                case "clientes":
                        sql= "UPDATE " + body.btn_valor + 
                        " SET nombre_c = '"+body.nombre_c +"', apepat_c = '"+body.apepat_c+"', apemat_c ='"+body.apemat_c+"', clave_pedidos='"+body.clave_pedidos+"', id_d= "+body.id_d+
                        " WHERE id_c= "+body.id_modificar+";";       
                        sql2= "UPDATE " + body.btn_valor + 
                        " SET nombre_c = '"+body.nombre_c +"', apepat_c = '"+body.apepat_c+"', apemat_c ='"+body.apemat_c+"', clave_pedidos='"+body.clave_pedidos+"', id_d= "+body.id_d+
                        " WHERE id_c= "+body.id_modificar+";";       
                        break;

                case "productos":
                        sql= "UPDATE " + body.btn_valor + 
                        " SET nombre_p = '"+body.nombre_p +"', descripcion_p = '"+body.descripcion_p+"', precio_p="+body.precio_p+ ", stock_p="+body.stock_p+
                        " WHERE id_p= "+body.id_modificar+";";       
                        sql2= "UPDATE " + body.btn_valor + 
                        " SET nombre_p = '"+body.nombre_p +"', descripcion_p = '"+body.descripcion_p+"', precio_p="+body.precio_p+ ", stock_p="+body.stock_p+
                        " WHERE id_p= "+body.id_modificar+";";       
                        break;

                case "origen_e":
                        sql= "UPDATE " + body.btn_valor + 
                        " SET dir_origen = '"+body.dir_origen +
                        "' WHERE id_o= "+body.id_modificar+";";       
                        sql2= "UPDATE " + body.btn_valor + 
                        " SET dir_origen = '"+body.dir_origen +
                        "' WHERE id_o= "+body.id_modificar+";";       
                        break;

                case "facturas":
                        sql= "UPDATE " + body.btn_valor + 
                        " SET id_c = "+body.id_c +", id_p = "+body.id_p+", cant="+body.cant+", precio_p="+body.precio_p+", total="+body.total+", id_e= "+body.id_e+
                        " WHERE id_f= "+body.id_modificar+";";       
                        sql2= "UPDATE " + body.btn_valor + 
                        " SET id_c = "+body.id_c +", id_p = "+body.id_p+", cant="+body.cant+", precio_p="+body.precio_p+", total="+body.total+", id_e= "+body.id_e+
                        " WHERE id_f= "+body.id_modificar+";";       
                        break;

                case "destino_e":
                        sql= "UPDATE " + body.btn_valor + 
                        " SET dir_destino = '"+body.dir_destino+
                        "' WHERE id_d= "+body.id_modificar+";";       
                        sql2= "UPDATE " + body.btn_valor + 
                        " SET dir_destino = '"+body.dir_destino+
                        "' WHERE id_d= "+body.id_modificar+";";       
                        break;

                case "envios":
                        sql= "UPDATE " + body.btn_valor + 
                        " SET id_o= "+body.id_o +", id_d = "+body.id_d+
                        " WHERE id_e= "+body.id_modificar+";";       
                        sql2= "UPDATE " + body.btn_valor + 
                        " SET id_o= "+body.id_o +", id_d = "+body.id_d+
                        " WHERE id_e= "+body.id_modificar+";";       
                        break;

                case "trabajadores":
                        sql= "UPDATE " + body.btn_valor + 
                        " SET nombre_t = '"+body.nombre_t +"', apepat_t = '"+body.apepat_t +"', apemat_t='"+body.apemat_t+
                        "' WHERE id_t= "+body.id_modificar+";";       
                        sql2= "UPDATE " + body.btn_valor + 
                        " SET nombre_t = '"+body.nombre_t +"', apepat_t = '"+body.apepat_t +"', apemat_t='"+body.apemat_t+
                        "' WHERE id_t= "+body.id_modificar+";";       
                        break;
                        break;

                case "sueldos":
                        sql= "UPDATE " + body.btn_valor + 
                        " SET id_t = "+body.id_t +", comision = "+body.comision+", trabajos_realizados='"+body.trabajos_realizados+"', sueldo_estimado="+body.sueldo_estimado+
                        " WHERE id_s= "+body.id_modificar+";";       
                        sql2= "UPDATE " + body.btn_valor + 
                        " SET id_t = "+body.id_t +", comision = "+body.comision+", trabajos_realizados='"+body.trabajos_realizados+"', sueldo_estimado="+body.sueldo_estimado+
                        " WHERE id_s= "+body.id_modificar+";";       
                        break;
        }
        console.log("Llegó");
        console.log(body);
        lconn.query(sql, (err, data, fields) =>{
                if(err) throw err;
                console.log("Resultado "+ JSON.stringify(data));
                res.render('view_insertar', {titulopag: "Cambios"});
        })
        if(sconn.state === 'authenticated'){
                sconn.query(sql2, (err, data, fields) =>{
                        if(err) throw err;
                        console.log("Resultado "+ JSON.stringify(data));
                        
                })
        }
        
    });

module.exports = router;