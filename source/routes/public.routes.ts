import { Router } from "express";
import { PublicController } from "../controllers/public.controller";

export class PublicRoutes {
  private router: Router;
  private controller: PublicController;

  constructor() {
      this.router = Router();
      this.controller = new PublicController();

      this.routes();
  }

  private routes() {
      this.router.get("/conexion", this.controller.testConexion);
  }

  /**
   * retorna las rutas
   */
  public getRoutes() {
      return this.router;
  }
}
