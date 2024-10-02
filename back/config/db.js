import mongoose from 'mongoose';


export const connectToDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MondoDB Conectado: ${connect.connection.host}`);
        
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1); // el codigo de 'process' 1 significa conexión fallida y 0 exito.
    }
}