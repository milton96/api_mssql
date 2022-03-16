import sql from "mssql";
import { DB_CONFIG } from "./config";

export class DataBase {
    private db_config : sql.config = {
        server: DB_CONFIG.SERVER,
        database: DB_CONFIG.DATABASE,
        user: DB_CONFIG.USER,
        password: DB_CONFIG.PASS,
        port: Number.parseInt(DB_CONFIG.PORT),
        options: {
            encrypt: true,
            trustServerCertificate: true
        }
    }

    constructor(){}

    public async getConnection() {
        try {
            return await sql.connect(this.db_config);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    /**
     * prueba la conexion
     */
    public async test(): Promise<boolean> {
        try {
            let pool = await this.getConnection();
            if (!pool) throw {msg: "no fue posible realizar la conexión"};

            let result = await pool.request().query("select 1 as resultado");
            //console.log(result);
            console.log("Conexión exitosa");
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}