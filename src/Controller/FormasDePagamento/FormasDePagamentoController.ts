import { Request, Response } from 'express';
import { CriarFormasDePagamentoService } from '../../services/FormasDePagamentoService/CriarFormasDePagamentoService';



export default class FormasDePagamentoController {
  async criar(request: Request, response: Response) {
    try {
      const body = request.body;
      const criarFormaPagamentoService = new CriarFormasDePagamentoService();
    
      const formasDePagamento = await criarFormaPagamentoService.execute(body);

      return response.status(200).json(body);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
