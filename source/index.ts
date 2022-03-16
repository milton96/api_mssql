import { DataBase } from "./database";
import { Server } from "./server";

function init() {
    console.log("iniciando servidor...");
    const server = new Server();
    server.start();

    const db = new DataBase();
    db.test().then(res => {
        //console.log(`res: ${res}`);
    }).catch(err => {
        //console.log(err);
    });
}

init();