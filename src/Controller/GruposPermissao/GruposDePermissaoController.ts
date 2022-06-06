import { Request, Response } from 'express';
import { CriarGrupoPermissao } from '../../services/GrupoPermissaoService/CriarGrupoPermissaoService';


export default class GruposDePermissaoController {
  async criar(request: Request, response: Response) {
    try {
      const body = request.body;
      const criarGrupoDePermissaoService = new CriarGrupoPermissao();

      const grupoDePermissao = await criarGrupoDePermissaoService.execute(body);

      return response.status(200).json(body);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
