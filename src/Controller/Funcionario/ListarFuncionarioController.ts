import { Request, Response } from 'express';
import { ListarFuncionariosService } from '../../services/FuncionarioService/ListarFuncionarioService';

export default class FuncionarioControllerListar {
  async listar(request: Request, response: Response): Promise<Response> {
    try {
      const listasFuncionariosService = new ListarFuncionariosService();

      const funcionarios = await listasFuncionariosService.execute();

      return response.json(funcionarios);
    } catch (err) {

      return response.status(400).json({ error: err.message });

    }
  }
}
