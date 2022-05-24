const express = require('express');
const router = express.Router();
const conn = require('../dbconnection.js');

router.use(express.static(__dirname + "/public"))
router.use(express.static(__dirname + "/"));

router.get('/', (req, res, next) => {
    res.render('main_index', {titulopag: "Pagina principal"});
    
});

router.get('/login', (req, res,)=> {
    res.render('login', {titulopag: "inicio de sesión"});
});

/*Función router.get() 
Es la que renderiza la vista que ocupemos mostrar de acuerdo a la ruta accesada
Se especifica la ruta de acceso para la vista (Desde la definición de ruta de main_app.js)
y un bloque de sentencias

Ejemplo:
Ruta de acceso desde 'Apartado1/' que fue definida en main_app.js
Su ruta completa sería /Apartado1/index
                v
router.get('/index', (req, res)=>{
    bloque de sentencias
})*/
module.exports = router;