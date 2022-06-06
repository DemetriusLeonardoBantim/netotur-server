import { Request, Response } from 'express';
import { GrupoPermissaoService } from '../../services/GrupoPermissaoService/ListarGrupoPermissaoService';

export default class ListarGrupoPermissaoService {
  async listar(request: Request, response: Response): Promise<Response> {
    try {
      const listarGrupoPermissaoService = new GrupoPermissaoService();

      const agencia = await listarGrupoPermissaoService.execute();

      return response.json(agencia);
    } catch (err) {

      return response.status(400).json({ error: err.message });

    }
  }
}
