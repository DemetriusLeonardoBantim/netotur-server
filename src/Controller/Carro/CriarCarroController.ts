import { Request, Response } from 'express';
import { CriarCarroService } from '../../services/CarroService/CriarCarroService';

export default class CarroController {
  async criar(request: Request, response: Response) {
    try {
      const body = request.body;
      const criarCarroService = new CriarCarroService();
    
      const carro = await criarCarroService.execute(body);
      console.log(carro)
      return response.status(200).json(body);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
