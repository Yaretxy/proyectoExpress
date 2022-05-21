const db = require('./servicios_conexion');
class adopciones{
    constructor(){
        this.generate();
    }
    generate(){

    }

    async obtener(){
        const result= await db.query(`SELECT animales.nombre,
                                      animales.edad, 
                                      vacunas.vacuna
                                      FROM animales
                                      INNER JOIN vacunas on animales.id_vacuna= vacunas.id`);
        return result;
    }

    async agregar(data) {
        console.log(data);
        const result= await db.query(
          `INSERT INTO animales (nombre,edad) VALUES
          ( '${data.nombre}',${data.edad})`);
        return result;
      }

      async ObtenerRegistro(id) {
        const result= await db.query(`SELECT * FROM animales where id=${id}`);
            return result;
        }

        async actualizar(id, changes) {
            const result= await db.query(
              `UPDATE animales SET
            nombre='${changes.nombre}',
            edad=${changes.edad}
             WHERE id = ${id};`);
                return result;
          }

          async borrar(id) {
            const result= await db.query(`Delete FROM animales where id=${id}`);
            
               
                return result;
            }

          
    

      
}
module.exports = adopciones;
