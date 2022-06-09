const db = require('./servicios_conexion');
class personas{
    constructor(){
        this.generate();
    }
    generate(){

    }


async agregarPersona(data) {
    console.log(data);
    const result= await db.query(
      `INSERT INTO persona (nombre, aPaterno, aMaterno, direccion, telefono, edad) VALUES
      ( '${data.nombre}',
        '${data.aPaterno}',
        '${data.aMaterno}',
        '${data.direccion}',
        '${data.telefono}',
        ${data.edad})`);
    return result;
  }

  async obtener(){
    const result= await db.query(`SELECT *
                                          FROM persona`);
                                          return result;
}
}
module.exports = personas;