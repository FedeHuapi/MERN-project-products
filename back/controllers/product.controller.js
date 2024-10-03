import Product from "../models/product.model.js"
import mongoose from 'mongoose';

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products});
    } catch (error) {
        console.log("Error al obtener productos:", error.message);
        res.status(500).json({ success: false, message: "Error en el servidor"})
    }
};

export const createProduct = async (req, res) => {
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
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Id incorrecto del producto"});
    }

    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
      res.status(200).json({ success: true, data: updatedProduct})
    } catch (error ) {
        res.status(500).json({ success: false, message: "Error en el servidor" });
    }
};

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Id incorrecto del producto"});
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Producto eliminado"});
    } catch (error) {
        console.log("Error en eliminar producto:", error.message);
        res.status(500).json({ success: false, message: "Error en el servidor"});
    }
};

