import { Router } from "express"; 
import { GaleriaImgController } from "./controlador_galeria_img.js";


export const galeriaImgRouter = Router(); 


galeriaImgRouter.get("/obtener_pintores", GaleriaImgController.obtenerPintores); 

galeriaImgRouter.get("/obtener_pinturas", GaleriaImgController.obtener_pinturas);

galeriaImgRouter.get("/obtener_pinturas_por_pintor/:id_pintor", GaleriaImgController.obtener_pinturas_por_pintor); 


