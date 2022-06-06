import { Request, Response } from 'express';
import { DeletarDespesasService } from '../../services/DespesasServices/DeleteDespesasService';

export default class TiposDeDespesasControllerDeletar {
  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const {id} = request.params

      const deletarTiposDeDespesas = new DeletarDespesasService();

      await deletarTiposDeDespesas.execute({id})

      return response.json([])

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
