import { Request, Response } from 'express';
import { ListarUsuarioService } from '../../services/UsuarioService/ListarUsuarioService';

export default class ListarUsuariosController {
  async listar(request: Request, response: Response): Promise<Response> {
    try {
      const listarUsuariosService = new ListarUsuarioService();

      const usuarios = await listarUsuariosService.execute();

      return response.json(usuarios);
    } catch (err) {

      return response.status(400).json({ error: err.message });

    }
  }
}


