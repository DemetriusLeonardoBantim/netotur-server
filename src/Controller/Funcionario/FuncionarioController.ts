import { Request, Response } from 'express';
import { CriarFuncionarioService } from '../../services/FuncionarioService/CriarFuncionarioService';

export default class FuncionarioController {
  async criar(request: Request, response: Response) {
    try {
      const body = request.body;
      const criarFuncionarioService = new CriarFuncionarioService();
  
      const funcionario = await criarFuncionarioService.execute(body);

      return response.status(200).json(body);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
