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

    private request?: sql.Request;

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

    /**
     * crea un objeto request para hacer la peticion
     */
    public async createRequest() {
        try {
            this.request = undefined;
            let pool = await this.getConnection();
            if (!pool) throw {error: "No se estableció la conexión"};

            this.request = pool.request();
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * agrega un parametro de tipo input
     */
    public addInputParameter(name: string, type: sql.ISqlType | (() => sql.ISqlType), value: any) {
        if (this.request) {
            this.request.input(name, type, value);
        }
    }

    /**
     * agrega un parametro de tipo input
     */
     public addOutputParameter(name: string, type: sql.ISqlType | (() => sql.ISqlType)) {
        if (this.request) {
            this.request.output(name, type);
        }
    }

    /**
     * ejeccuta el request
     */
    public async executeRequest(storeProcedure: string) {
        if (this.request) {
            return await this.request.execute(storeProcedure);
        }
    }
}