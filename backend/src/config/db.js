const mongoose= require('mongoose');
require('dotenv').config()

const connectDB= async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado al servidor MongoDB");
    } catch(err){
        console.error("Error durante la conexión con la base de datos: ", err);
        process.exit(1);
    }
}

module.exports = connectDB;