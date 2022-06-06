import { Request, Response } from 'express';
import { ListarFormaDePagamentoService } from '../../services/FormasDePagamentoService/ListarFormasDePegamentoService';


export default class FormasDePagamentoControllerListar {
  async listar(request: Request, response: Response): Promise<Response> {
    try {
      const listasFormasDePagamentoService = new ListarFormaDePagamentoService();

      const formasDePagamento = await listasFormasDePagamentoService.execute();

      return response.json(formasDePagamento);
    } catch (err) {

      return response.status(400).json({ error: err.message });

    }
  }
}
