import { Response } from "express";

export class ReponseHelper {
    private messages: string[];
    private response?: any;

    constructor() {
        this.messages = [];
    }
    
    /**
     * setResponse
     */
    public setResponse(response: any) {
        this.response = response;
    }

    /**
     * addMessage
     */
    public addMessage(message: string) {
        this.messages.push(message);
    }

    /**
     * getResponse
     */
    public getResponse(res: Response, status: number) {
        return res.status(status).json({
            status,
            messages: this.messages,
            response: this.response
        });
    }
}