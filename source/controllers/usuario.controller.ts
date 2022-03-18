import { Request, Response } from "express";
import { ReponseHelper } from "../helpers/response.helper";
import { login } from "../services/usuario.services";

export class UsuarioController {
  constructor() {}

  public async login(req: Request, res: Response) {
    const response = new ReponseHelper();
    try {
      const { correo, password } = req.body;
      const result = await login(correo, password);
      console.log(result);
      response.setResponse({
        result,
        token: "",
      });
      return response.getResponse(res, 200);
    } catch (error) {
      response.setResponse(error);
      return response.getResponse(res, 500);
    }
  }
}
