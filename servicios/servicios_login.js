const db = require('./servicios_conexion');
class login{
    constructor(){
        this.generate();
    }
    generate(){

    }
    async agregar(data) {
        console.log(data);
        const result= await db.query(
          `INSERT INTO usuarios (nombre,password) VALUES
          ( '${data.nombre}','${data.password}')`);
        return result;
      }

      async ingresar(data) {
        console.log(data);
        const result= await db.query(
          `SELECT * FROM usuarios`);
        return result;
      }

     
}
module.exports = login;
