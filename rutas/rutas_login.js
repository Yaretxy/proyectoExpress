const express = require('express');
const login = require('../servicios/servicios_login');
const ruta = express.Router();
const servicios = new login();

//registrar
ruta.post('/registrar',async function(req,res,next){
    try {
        res.json(await servicios.agregar(req.body));
        
    } catch (error) {
        console.log(`Error mientras se creaba el registro`,error.message);
        next(error);
        
    }

});

//registrar
ruta.get('/ingresar',async function(req,res,next){
    try {
        res.json(await servicios.ingresar(req.body));
        
    } catch (error) {
        console.log(`Error mientras se ingresaba`,error.message);
        next(error);
        
    }

});
module.exports = ruta;