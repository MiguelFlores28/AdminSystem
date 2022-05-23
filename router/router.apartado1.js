const express = require('express');
const router = express.Router();
const conn = require('../dbconnection.js');

router.use(express.static(__dirname + "/public"))
router.use(express.static(__dirname + "/"));

router.get('/index1', (req, res) => {
    console.log("Acceso a index1 desde /Apartado1/index1");
    res.render('index1', {titulopag: "Hola Mundo"});
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