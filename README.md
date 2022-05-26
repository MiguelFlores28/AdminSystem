Proyecto para la materia de Bases de Datos Distribuídas ISC 8vo Semestre 

Algunas notas:

Se modificaron algunos archivos:
- Se elimina router.apartado1.js (Sirvió de test, actualmente no se ocupa)
- Se elimina index1. ejs (Sirvió de test, actualmente no se ocupa)
- El archivo dbconnection.js pasa a ser dos archivos: localdbconnection.js y serverdbconnection.js
Esto con el fin de poder actualizar los registros en ambos servidores al mismo tiempo por lo que

*localdbconnection.js pasa a ser el archivo para la conexión a base de datos local (Windows). En ella
se usan las credenciales de acceso de Windows

*serverdbconnection.js pasar a ser el archivo para la conexión a base de datos en servidor (Linux). En ella
se usan las credenciales de acceso de Linux

Credenciales
Host -> localhost, dirección ip

Usuarios -> 
    para Windows: winarchitect, winmanager 
    para Linux: lnxarchitect, lnxmanager

Contraseñas-> 
    para Windows-> 
    winarchitect@localhost: Pass_001
    winarchitect@%: Pass_002
    winmanager@localhost: Pass_003
    para Linux -> 
    lnxarchitect@localhost: password01
    lnxarchitect@%: password02
    lnxmanager@localhost: password03

(Para Linux lo mismo pero al revés. server funciona como el local y local como el server xd)

Las consultas SQL de CRUD se harán dos veces para ambos servidores, con el fin de tener ambos datos en ambas BD
ej:
    sql2="INSERT INTO tablas(valor1, valor2, valor3) VALUES (valor, valor, valor)";
    lconn.query(sql2, (err, data, fields)=>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
    });
    sconn.query(sql2, (err, data, fields)=>{
        if(err) throw err;
        console.log("Resultado "+ JSON.stringify(data));
    });
================================================================ Función del ruteo (en: Main_app.js)
Nos permite separar vistas de acuerdo a la ruta de acceso 

Ejemplo:
Vista 1 puede ser accesible solamente desde la ruta '/Apartado1/Vista1'
Vista 1 no puede ser accesible desde otra ruta como por ejemplo '/Apartado2/Vista1

Por lo que en main_app.js se define en la sección de Ruteo que para ciertas rutas se use la direción '/Apartado1' o '/Apartado2'
Después, en la sección de router se crearán los archivos de ruta que renerizarán las páginas que se definan dentro de su ruta.
Por conveniencia, los nombres de los archivos de rutas se definen como "router.nombre_Apartado.js"


La sección de vistas contiene los archivos que suelen verse en el front-end.
La sección de vistas/templates define un header y un footer los cuales se pueden mandar a lllamar desde cualquier archivo
con extensión .ejs (Que en este caso sustituye a nuestro html) para no reescribirlos en cada archivo que se hace.


================================================================= Función router.get() (en: router....js)
Es la que renderiza la vista que ocupemos mostrar de acuerdo a la ruta accesada
Se especifica la ruta de acceso para la vista (Desde la definición de ruta de main_app.js)
y un bloque de sentencias

Ejemplo:
Ruta de acceso desde 'Apartado1/' que fue definida en main_app.js
Su ruta completa sería /Apartado1/index
                v
router.get('/index', (req, res)=>{
    bloque de sentencias
})

