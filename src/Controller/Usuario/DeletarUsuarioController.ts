import { Request, Response } from 'express';
import { DeletarFuncionarioService } from '../../services/UsuarioService/DeletarUsuarioService';

export default class UsuarioControllerDeletar {
  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const {id} = request.params

      const deletarUsuario = new DeletarFuncionarioService();

      await deletarUsuario.execute({id})

      return response.json([])

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
      
    }
  }
}
