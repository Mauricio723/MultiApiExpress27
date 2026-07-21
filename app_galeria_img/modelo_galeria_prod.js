import dbconnection from "../db_connection/db_connection_prod.js";

export class GaleriaImgModelProd {

    
    static async obtenerPintoresProd() {

        const [listaPintores] = await dbconnection.query("SELECT * FROM galeria_pintores;");

        return listaPintores;

    }

    static async obtenerIdPintorPorNombre(nombre_pintor) {
        const id_pintor = await dbconnection.query("SELECT id FROM galeria_pintores WHERE nombre_pintor = ?;", 
            [nombre_pintor]); 

        return id_pintor;
    }
     

}