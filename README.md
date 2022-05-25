Proyecto para la materia de Bases de Datos Distribuídas ISC 8vo Semestre 

Algunas notas:


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

