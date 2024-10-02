import express from 'express';
import dotenv from "dotenv";
import { connectToDb }  from "./config/db.js"
import Product from './models/product.model.js';

dotenv.config();

const app = express();

app.use(express.json()) // Nos permite aceptar información en JSON en el req.body - Middleware

app.post("/api/products", async (req, res) => {
    const product = req.body; // product body <- esto es lo que envía el usuario

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Por favor complete todos los campos"})
    }

    const newProduct = new Product(product)

    try{
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
    } catch (error) {
        console.log("Error al crear producto:", error.message);
        res.status(500).json({ success: false, message: "Error en el servidor"})
        
    }
})


app.listen(5000, () => {
    connectToDb();
    console.log("Servidor iniciado en: http://localhost:5000");
    
});

