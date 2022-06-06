import { Request, Response } from 'express';
import { ListarAgenciaService } from '../../services/AgenciaService/ListarAgenciaService';

export default class AgenciaControllerListar {
  async listar(request: Request, response: Response): Promise<Response> {
    try {
      const listarAgenciaService = new ListarAgenciaService();

      const agencia = await listarAgenciaService.execute();

      return response.json(agencia);
    } catch (err) {

      return response.status(400).json({ error: err.message });

    }
  }
}
