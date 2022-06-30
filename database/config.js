//ocupamos el paquete de mongoses
//const port = require('../server/utilidades/utilidades')
const mongoose = require('mongoose'); 

//crear una function para la connneccion

const dbConection = async() =>{

    try {
        await mongoose.connection(process.env.MONGODB_CNN, {

        });
        console.log('Base de datos online');

    }catch(error){
        console.log(error);
        throw new Error('Error al iniciar la base de datos')
    }

}


//nos sirve para reutilizarlo en otros archivos
module.exports = {
    dbConection
}