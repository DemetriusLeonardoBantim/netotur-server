import { Request, Response } from 'express';
import { DeletarFuncionarioService } from '../../services/FuncionarioService/DeleteFuncionarioService';

export default class FuncionarioControllerDeletar {
  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const {id} = request.params

      const deletarFuncionario= new DeletarFuncionarioService();

      await deletarFuncionario.execute({id})

      return response.json([])

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
