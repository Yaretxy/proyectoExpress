const express = require('express');
const app = express();
const port = 3007;
const rutasAdopciones = require('./rutas/rutas_adopciones');
const cors = require('cors');
app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended:true,
  })
);

app.use('/adopciones',rutasAdopciones);
app.listen(port,()=>{
    console.log(`puerto:${port}`);
});