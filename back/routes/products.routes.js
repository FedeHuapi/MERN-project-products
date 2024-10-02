import express from 'express';
import { createProduct, deleteProduct, getAllProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;