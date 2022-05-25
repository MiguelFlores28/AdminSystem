//Script principal. Contiente la creación de servidor con express y la definición de las rutas
 const express = require('express');
 const app = express();
 const puerto = 10000;
 const connection = require('./dbconnection.js');

//Creación del motor de vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Ruteo
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/public'));
app.use('/', require('./router/router.main'));
app.use('/Tablas', require('./router/router.tablas'));
//app.use('/Operaciones', require('./router/router.operaciones'));

//Servidor express
app.listen (puerto, () =>{
    console.log('Servidor escuchando en el puerto ', puerto);
})


/*Función del ruteo
Nos permite separar vistas de acuerdo a la ruta de acceso 

Ejemplo:
Vista 1 puede ser accesible solamente desde la ruta '/Apartado1/Vista1'
Vista 1 no puede ser accesible desde otra ruta como por ejemplo '/Apartado2/Vista1

Por lo que en main_app.js se define en la sección de Ruteo que para ciertas rutas se use la direción '/Apartado1' o '/Apartado2'
Después, en la sección de router se crearán los archivos de ruta que renerizarán las páginas que se definan dentro de su ruta.
Por conveniencia, los nombres de los archivos de rutas se definen como "router.nombre_Apartado.js"
*/

/*La sección de vistas contiene los archivos que suelen verse en el front-end.
La sección de vistas/templates define un header y un footer los cuales se pueden mandar a lllamar desde cualquier archivo
con extensión .ejs (Que en este caso sustituye a nuestro html) para no reescribirlos en cada archivo que se hace.
*/