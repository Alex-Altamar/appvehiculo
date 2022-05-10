import { Request, Response, Application } from "express";
import {UsuarioController} from '../controller/usuario.controller';

export class UsuarioRoutes{
    public usuariocontroller: UsuarioController = new UsuarioController();

    public routes(app: Application): void{
        app.route("/usuarios").get(this.usuariocontroller.getAllUsuario)
        app.route("/usuarios").get(this.usuariocontroller.getOneUsuario)
        app.route("/usuarios").post(this.usuariocontroller.createUsuario)
        app.route("/usuarios").patch(this.usuariocontroller.updateUsuario)
        app.route("/usuarios").delete(this.usuariocontroller.deleteUsuario)
        
    }

}