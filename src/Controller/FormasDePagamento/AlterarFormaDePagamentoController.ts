import { Request, Response } from 'express';
import { AlterarFormasDePagamentoService } from '../../services/FormasDePagamentoService/AlterarFormasDePagamentoService';



export default class FormasDePagamentoControllerEditar {
  async editar(request: Request, response: Response): Promise<Response> {
    try {
      const {formaDePagamento} = request.body
      const {id} = request.params

    
      const formaPagamentoService = new AlterarFormasDePagamentoService();

      const formaPagamento = await formaPagamentoService.execute({formaDePagamento,id})

      return response.json(formaPagamento)

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
