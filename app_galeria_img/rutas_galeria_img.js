import { Router } from "express"; 
import { GaleriaImgController } from "./controlador_galeria_img.js";


export const galeriaImgRouter = Router(); 

galeriaImgRouter.get("/texto_prueba_galeria", (req, res) => {
    const datoPruebaEnv = "user de CleverCloud: " + process.env.CLEVER_CLOUD_MYSQL_USER;
    res.json({ mensaje: datoPruebaEnv });
}); 

galeriaImgRouter.get("/obtener_imagenes", GaleriaImgController.obtener_imagenes); 

galeriaImgRouter.get("/obtener_imagenes_por_pintor/:id_pintor", GaleriaImgController.obtener_imagenes_por_pintor); 

galeriaImgRouter.get("/obtener_imagenes_con_pintores", GaleriaImgController.obtenerImagenesConPintores); 


