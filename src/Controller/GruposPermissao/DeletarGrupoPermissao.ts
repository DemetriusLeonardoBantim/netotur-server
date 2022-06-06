import { Request, Response } from 'express';
import { DeletarGrupoPermissaoService } from '../../services/GrupoPermissaoService/DeletarGrupoPermissaoService';

export default class FuncionarioControllerDeletar {
  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const {id} = request.params

      const deletarGrupoPermissao = new DeletarGrupoPermissaoService();

      await deletarGrupoPermissao.execute({id})

      return response.json([])

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
