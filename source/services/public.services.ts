import { DataBase } from "../database";

export const test = async () => {
  try {
    const db = new DataBase();
    let result = await db.test();
    //console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};
