import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import { SERVER_CONFIG } from "./config";
import { PublicRoutes } from "./routes/public.routes";
import { UsuarioRoutes } from "./routes/usuario.routes";

export class Server {
    private app: Application;

    private publicRoutes: PublicRoutes;
    private usuarioRoutes: UsuarioRoutes;

    constructor(){
        // inicializar
        this.publicRoutes = new PublicRoutes();
        this.usuarioRoutes = new UsuarioRoutes();

        // configuraciones
        this.app = express();
        this.config();

        // rutas
        this.routes();
    }

    private config() {
        this.app.set("port", SERVER_CONFIG.PORT);
        this.app.use(morgan("dev"));
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private routes() {
        this.app.use("/api", this.publicRoutes.getRoutes());
        this.app.use("/api", this.usuarioRoutes.getRoutes());
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