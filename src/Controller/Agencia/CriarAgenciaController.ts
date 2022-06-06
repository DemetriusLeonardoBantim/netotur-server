import { Request, Response } from 'express';
import { CriarAgenciaService } from '../../services/AgenciaService/CriarAgenciaService';

export default class AgenciaController {
  async criar(request: Request, response: Response) {
    try {
      const body = request.body;
      const criarAgenciaService = new CriarAgenciaService();

    
      const agencia = await criarAgenciaService.execute(body);

 
      return response.status(200).json(body);
    } catch (err) {

      return response.status(400).json({ error: err.message });
    }
  }
}
