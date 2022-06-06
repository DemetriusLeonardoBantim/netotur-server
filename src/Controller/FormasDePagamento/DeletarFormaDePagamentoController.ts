import { Request, Response } from 'express';
import { DeletarFormasDePagamentoService } from '../../services/FormasDePagamentoService/DeleteFormasDePagamentoService';

export default class FormaDePagamentoControllerDeletar {
  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const {id} = request.params

      const deletarFormaDePagamento= new DeletarFormasDePagamentoService();

      await deletarFormaDePagamento.execute({id})

      return response.json([])

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
