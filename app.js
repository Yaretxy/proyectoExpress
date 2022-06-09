const express = require('express');
const app = express();
const port = 3007;
const rutasAdopciones = require('./rutas/rutas_adopciones');
const rutasPersonas = require('./rutas/ruta_personas');
const rutasLogin = require('./rutas/rutas_login');
const cors = require('cors');
app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended:true,
  })
);
app.use('/login',rutasLogin);
app.use('/adopciones',rutasAdopciones);
app.use('/personas',rutasPersonas);
app.listen(port,()=>{
    console.log(`puerto:${port}`);
});

//