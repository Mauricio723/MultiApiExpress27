import { GaleriaImgModelProd } from "./modelo_galeria_prod.js";

export class GaleriaImgController {

    static async obtener_pinturas(req, res) {
        const datosPinturas = await GaleriaImgModelProd.obtenerPinturas();

        res.json(datosPinturas);
    }

    static async obtenerPintores(req, res) {

        const datosPintores = await GaleriaImgModelProd.obtenerPintoresProd(); 

        res.json(datosPintores); 
    }

    static async obtener_pinturas_por_pintor(req, res) {

        const id_pintor = req.params.id_pintor;

        //console.log("id pintor ingresado: ", id_pintor);
        const lista_imagenes = await GaleriaImgModelProd.obtenerPinturasPorIdPintor(id_pintor);

        //console.log("lista de imagenes: ", lista_imagenes); 

        res.json(lista_imagenes);
    }   


}