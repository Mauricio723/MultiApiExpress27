import dbconnection from "../db_connection/db_connection_local.js";

export class GaleriaImgModel {

    static async obtenerImagenes() {
        const string_query = "SELECT * FROM datos_img_galeria;";

        const [datosImagenes] = await dbconnection.query(string_query);

        return datosImagenes;
    }


    static async obtenerImagenesPorIdPintor(id_pintor) {

        const string_query = "SELECT * FROM datos_img_galeria d"
            + " join pintores p on d.id_pintor = p.id where d.id_pintor = ?;"
        const [datosImagenes] = await dbconnection.query(string_query, [id_pintor]);

        return datosImagenes;

    }

    static async obtenerPintores() {

        const string_query = "SELECT * FROM pintores;"; 

        const [datosPintores] = await dbconnection.query(string_query); 

        return datosPintores;
        
    }
    
    static async obtenerImagenesConPintores() {
        
        const string_query = "SELECT * FROM datos_img_galeria d" 
            + " join pintores p on d.id_pintor = p.id;"
        const [datosImagenesConPintores] = await dbconnection.query(string_query); 

        return datosImagenesConPintores;

    }


}