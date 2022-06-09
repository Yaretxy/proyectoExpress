const db = require('./servicios_conexion');
class adopciones{
    constructor(){
        this.generate();
    }
    generate(){

    }

    async obtener(){
        const result= await db.query(`SELECT animal.id_animal,
                                              animal.nombre,
                                              animal.edad,
                                              animal.raza,
                                              animal.color,
                                              animal.sexo,
                                              animal.estado,
                                              animal.imagen, 
                                              vacuna.tipo
                                              FROM animal
                                              INNER JOIN vacuna on animal.id_vacunas= vacuna.id_vacuna`);
                                              return result;
    }

    

    async agregar(data) {
        console.log(data);
        const result= await db.query(
          `INSERT INTO animal (nombre, edad, raza, color, sexo, estado, id_vacunas, imagen) VALUES
          ( '${data.nombre}',
            '${data.edad}',
            '${data.raza}',
            '${data.color}',
            '${data.sexo}',
            '${data.estado}',
            ${data.id_vacunas},
            '${data.imagen}')`);
        return result;
      }

      async ObtenerRegistro(id) {
        const result= await db.query(`SELECT * FROM animal where id_animal=${id}`);
            return result;
        }

        async actualizar(id, changes) {
            const result= await db.query(
              `UPDATE animal SET
                nombre='${changes.nombre}',
                edad='${changes.edad}',
                raza='${changes.raza}',
                color='${changes.color}',
                sexo='${changes.sexo}',
                estado='${changes.estado}',
                id_vacunas=${changes.id_vacunas},
                imagen='${changes.imagen}'

                WHERE id_animal = ${id};`);
                return result;
          }

          async borrar(id) {
            const result= await db.query(`Delete FROM animal where id_animal=${id}`);
            
               
                return result;
            }

            

          
    

      
}
module.exports = adopciones;
