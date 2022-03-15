import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import { SERVER_CONFIG } from "./config";

export class Server {
    private app: Application;

    constructor(){
        this.app = express();
        this.config();
    }

    private config() {
        this.app.set("port", SERVER_CONFIG.PORT);
        this.app.use(morgan("dev"));
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    /**
     * inicia el servidor
     */
    public start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Servidor en el puerto ${this.app.get("port")}`);
        })
    }
}