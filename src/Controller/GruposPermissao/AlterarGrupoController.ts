import { Request, Response } from 'express';
import { AlterarGrupoPermissaoService } from '../../services/GrupoPermissaoService/AlterarGrupoPermissaoService';

export default class GrupoPermissaoControllerEditar {
  async editar(request: Request, response: Response): Promise<Response> {
    try {
      const {nomeGrupoPermissao} = request.body
      const {id} = request.params

      const grupoPermissaoService = new AlterarGrupoPermissaoService();

      const grupoPermissao = await grupoPermissaoService.execute({nomeGrupoPermissao,id})

      return response.json(grupoPermissao)

    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
