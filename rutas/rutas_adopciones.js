const express = require('express');
const adopciones = require('../servicios/servcios_adopcion');
const ruta = express.Router();
const servicios = new adopciones();


ruta.get('/',async function(req, res, next){
    try {
        res.json(await servicios.obtener(req.query));
    } catch (error) {
        console.log(`erro al obtener datos de la tabla`,error);
        next(error);
    }
});

//crear datos
ruta.post('/',async function(req,res,next){
    try {
        res.json(await servicios.agregar(req.body));
        
    } catch (error) {
        console.log(`Error mientras se creaba el registro`,error.message);
        next(error);
        
    }

});

//trer un registro
ruta.get('/:id',async function(req,res,next){
    try {
    res.json(await servicios.ObtenerRegistro(req.params.id));

    } catch (error) {
        console.log(`error al obtener registro`);
    next(error);
    }
   });

   //editar
ruta.put('/:id',async function(req,res,next){
    try {
        res.json(await servicios.actualizar(
            req.params.id,req.body))
    } catch (error) {
        console.error(`Error mientras se creaba el registro`,
        error.message);
        next(error);
    }
  });

  //delete
ruta.delete('/:id',async function(req,res,next){
    try {
    res.json(await servicios.borrar(req.params.id));

    } catch (error) {
        console.log(`error al eliminar registro`);
    next(error);
    }
   });


module.exports = ruta;