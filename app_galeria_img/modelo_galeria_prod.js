import dbconnection from "../db_connection/db_connection_prod.js";

export class GaleriaImgModelProd {

    
    static async obtenerPintoresProd() {

        const [listaPintores] = await dbconnection.query("SELECT * FROM galeria_pintores;");

        return listaPintores;

    }

    static async obtenerPinturas() {

        const [listaPinturas] = await dbconnection.query("SELECT * FROM galeria_pinturas;");

        return listaPinturas;
    }

    static async obtenerPinturasPorIdPintor(id_pintor) {
        
        const string_query = "SELECT d.id AS id_pintura , d.titulo_img, d.url_imagen, "
            + "d.orden_imagen, d.pintor_id, p.nombre_pintor FROM galeria_pinturas d " 
            + "INNER JOIN galeria_pintores p on d.pintor_id = p.id where d.pintor_id = ?;";
               
        const [datosPinturas] = await dbconnection.query(string_query, [id_pintor]); 
        
        return datosPinturas;
    }

    static async obtenerIdPintorPorNombre(nombre_pintor) {
        const string_query = "SELECT id FROM galeria_pintores WHERE nombre_pintor = ?;"
        const id_pintor = await dbconnection.query(string_query, [nombre_pintor]); 

        return id_pintor;
    }
   

}