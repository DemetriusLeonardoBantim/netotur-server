import { Request, Response } from 'express';
import { ListarDespesasService } from '../../services/DespesasServices/ListarDespesasService';

export default class ListarDespesasController {
  async listar(request: Request, response: Response): Promise<Response> {
    try {
      const listarDespesasService = new ListarDespesasService();

      const despesas = await listarDespesasService.execute();

      return response.json(despesas);
    } catch (err) {

      return response.status(400).json({ error: err.message });

    }
  }
}


