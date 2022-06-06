import { Request, Response } from 'express';
import { CriarUsuarioService } from '../../services/UsuarioService/CriarUsuario';

export default class UsuarioController {
  async criar(request: Request, response: Response) {
    try {
      const body = request.body;
      
      const criarUsuarioService = new CriarUsuarioService();

      const usuario = await criarUsuarioService.execute(body);
      return response.status(200).json(usuario);
    } catch (err) {

      return response.status(400).json({ error: err.message });
    }
  }
}
