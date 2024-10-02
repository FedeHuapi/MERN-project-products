import express from 'express';
import dotenv from "dotenv";
import { connectToDb }  from "./config/db.js"
import productRoutes from "./routes/products.routes.js"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Nos permite aceptar información en JSON en el req.body - Middleware


app.use("/api/products", productRoutes)

app.listen(PORT, () => {
    connectToDb();
    console.log("Servidor iniciado en: http://localhost:" + PORT);
    
});

