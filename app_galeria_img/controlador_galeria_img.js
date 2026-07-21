import { GaleriaImgModel } from "./modelo_galeria_img.js";
import { GaleriaImgModelProd } from "./modelo_galeria_prod.js";

export class GaleriaImgController {

    static async obtener_imagenes(req, res) {
        const datos_imagenes = await GaleriaImgModel.obtenerImagenes();

        res.json(datos_imagenes);
    }

    static async obtener_imagenes_por_pintor(req, res) {

        const id_pintor = req.params.id_pintor;

        //console.log("id pintor ingresado: ", id_pintor);
        const lista_imagenes = await GaleriaImgModel.obtenerImagenesPorIdPintor(id_pintor);

        //console.log("lista de imagenes: ", lista_imagenes); 

        res.json(lista_imagenes);
    }

    static async obtenerImagenesConPintores(req, res) {
        const listaImagenesConPintores = await GaleriaImgModel.obtenerImagenesConPintores();

        console.log(listaImagenesConPintores);

        res.json(listaImagenesConPintores);

    } 


}