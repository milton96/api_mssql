import sql from "mssql";

import { DataBase } from "../database";

export const login = async (correo: string, password: string) => {
  try {
    const db = new DataBase();
    await db.createRequest();

    db.addInputParameter("correo", sql.NVarChar(250), correo);
    db.addInputParameter("password", sql.NVarChar(250), password);

    let result = await db.executeRequest("[dbo].[sp_Usuario_Login]");
    
    return result;
  } catch (error) {
    throw error;
  }
};

export const agregar = async (
  correo: string,
  nombre: string,
  password: string
) => {
  try {
    const db = new DataBase();
    await db.createRequest();

    db.addOutputParameter("id", sql.Int);
    db.addInputParameter("correo", sql.NVarChar(250), correo);
    db.addInputParameter("nombre", sql.NVarChar(250), nombre);
    db.addInputParameter("password", sql.NVarChar(250), password);
    db.addInputParameter("activo", sql.Bit, true);

    let result = await db.executeRequest("[dbo].[sp_Usuario_Agregar]");
    return result;
  } catch (error) {
    throw error;
  }
};
