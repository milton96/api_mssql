import dotenv from "dotenv";

if (process.env.NODE_ENV != "production") {
    dotenv.config();
}

export const SERVER_CONFIG = {
    PORT: process.env.PORT || "3000"
}