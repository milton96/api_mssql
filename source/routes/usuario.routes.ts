import { Router } from "express";
import { UsuarioController } from "../controllers/usuario.controller";

export class UsuarioRoutes {
  private router: Router;
  private controller: UsuarioController;

  constructor() {
      this.router = Router();
      this.controller = new UsuarioController();

      this.routes();
  }

  private routes() {
      this.router.post("/login", this.controller.login);
  }

  /**
   * retorna las rutas
   */
  public getRoutes() {
      return this.router;
  }
}
