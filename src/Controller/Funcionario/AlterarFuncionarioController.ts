import { Request, Response } from 'express';
import { AlterarFuncionarioService } from '../../services/FuncionarioService/AlterarFuncionarioService';

export default class FuncionarioControllerEditar {
  async editar(request: Request, response: Response): Promise<Response> {
    try {
      const {nomeFuncionario,dataNascimento,numeroCpf,numeroCnh,numeroRg,dataAdmissao} = request.body
      const {id} = request.params

      const funcionarioService = new AlterarFuncionarioService();

      const funcionario = await funcionarioService.execute({nomeFuncionario,dataNascimento,numeroCpf,numeroCnh,numeroRg,dataAdmissao,id})

      return response.json(funcionario)

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
