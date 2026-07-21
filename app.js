import express from "express"; 

import { galeriaImgRouter } from "./app_galeria_img/rutas_galeria_img.js"; 


const app = express(); 

app.use(express.json()); 


app.use("/galeria_img", galeriaImgRouter); 


const PORT = process.env.PORT ?? 3005;

app.listen(PORT, () => {
    console.log("Servidor corriendo en: http://localhost:", PORT); 
}); 
