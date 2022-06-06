import { Request, Response } from 'express';
import { ListarCarroService } from '../../services/CarroService/ListarCarroSerivece';

export default class CarroControllerListar {
  async listar(request: Request, response: Response): Promise<Response> {
    try {
      const listarCarroService = new ListarCarroService();
    
      const carro = await listarCarroService.execute();

      return response.json(carro);
    } catch (err) {

      return response.status(400).json({ error: err.message });

    }
  }
}
