import { Request, Response } from 'express';
import { DeletarAgenciaService } from '../../services/AgenciaService/DeleteAgencia';

export default class AgenciaControllerDeletar {
  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const {id} = request.params

      const deletarAgencia = new DeletarAgenciaService();

      await deletarAgencia.execute({id})

      return response.json([])

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
