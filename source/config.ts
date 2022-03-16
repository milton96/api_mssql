import dotenv from "dotenv";

if (process.env.NODE_ENV != "production") {
    dotenv.config();
}

export const SERVER_CONFIG = {
    PORT: process.env.PORT || "3000"
}

export const DB_CONFIG = {
    SERVER: process.env.DB_SERVER || "",
    DATABASE: process.env.DB_DATABASE || "",
    USER: process.env.DB_USER || "",
    PASS: process.env.DB_PASS || "",
    PORT: process.env.DB_PORT || "1433"
}