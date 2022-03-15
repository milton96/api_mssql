import { Server } from "./server";

function init() {
    console.log("iniciando servidor...");
    const server = new Server();
    server.start();
}

init();