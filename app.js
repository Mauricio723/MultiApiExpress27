import express from "express"; 

import { galeriaImgRouter } from "./app_galeria_img/rutas_galeria_img.js"; 

import cors from "cors"; 


const app = express(); 

app.use(express.json()); 

app.disable("x-powered-by");

app.use(cors({
    origin: ["http://localhost:4200", 
        "http://localhost:8080", 
        "https://mauricio723.github.io"], 
    credentials: true, 
    methods: ["GET", "POST", "PATCH"]
})); 


app.use("/galeria_img", galeriaImgRouter); 


const PORT = process.env.PORT ?? 3005;

app.listen(PORT, () => {
    console.log("Servidor corriendo en: http://localhost:", PORT); 
}); 
