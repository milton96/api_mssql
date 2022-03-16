import { Request, Response } from "express";
import { test } from "../services/public.services";

export class PublicController {
    constructor(){}

    public async testConexion(req: Request, res: Response) {
        try {
            console.log(req.body);
            const result = await test();
            res.status(200).json({ status: 200, message: result ? "conexión exitosa" : "no se pudo conectar" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: error });
        }
    }
}