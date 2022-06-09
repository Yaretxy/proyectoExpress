const express = require('express');
const personas = require('../servicios/servicio_persona');
const ruta = express.Router();
const servicio = new personas();

//crear datos
ruta.post('/',async function(req,res,next){
    try {
        res.json(await servicio.agregarPersona(req.body));
        
    } catch (error) {
        console.log(`Error mientras se creaba el registro`,error.message);
        next(error);
        
    }

});

ruta.get('/',async function(req, res, next){
    try {
        res.json(await servicio.obtener(req.query));
    } catch (error) {
        console.log(`erro al obtener datos de la tabla`,error);
        next(error);
    }
});
module.exports = ruta;