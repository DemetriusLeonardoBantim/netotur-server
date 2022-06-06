import { Request, Response } from 'express';
import { AlterarAgenciaService } from '../../services/AgenciaService/AlterarAgenciaService';

export default class AgenciaControllerEditar {
  async editar(request: Request, response: Response): Promise<Response> {
    try {
      const {nomeAgencia} = request.body
      const {id} = request.params

      const algerarAgencia = new AlterarAgenciaService();

      const agencia = await algerarAgencia.execute({nomeAgencia, id})

      return response.json(agencia)

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
