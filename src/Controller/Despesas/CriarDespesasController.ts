import { Request, Response } from 'express';
import { CriarDespesasService } from '../../services/DespesasServices/CriarDespesasService';

export default class DespesasController {
  async criar(request: Request, response: Response) {
    try {
      const body = request.body;
      const criarDespesasService = new CriarDespesasService();
    
      const despesa = await criarDespesasService.execute(body);

      return response.status(200).json(body);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
