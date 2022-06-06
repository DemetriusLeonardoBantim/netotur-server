import { Request, Response } from 'express';
import { CriarTiposDeDespesasService } from '../../services/TiposDeDespesasService/CriarTiposDeDespesasService';

export default class TiposDeDespesasController {
  async criar(request: Request, response: Response) {
    try {
      const body = request.body;
      const tiposDeDespesasService = new CriarTiposDeDespesasService();

      const tiposDeDespesas = await tiposDeDespesasService.execute(body);

      return response.status(200).json(body);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
