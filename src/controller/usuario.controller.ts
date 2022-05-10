import { Request, Response } from "express";
import { Usuario, UsuarioI } from "../models/Usuario";

export class UsuarioController {
    public async getAllUsuario(req: Request, res: Response){
        try {
            const usuario: UsuarioI[] = await Usuario.findAll()
            res.status(200).json()
        } catch (error) {
            
        }
    }

    public async getOneUsuario(req: Request, res: Response){

    }
    
    public async createUsuario(req: Request, res: Response){
        
    }

    public async updateUsuario(req: Request, res: Response){
        
    }

    public async deleteUsuario(req: Request, res: Response){
        
    }
}