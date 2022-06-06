import { Request, Response } from 'express';
import { AlterarDespesasService } from '../../services/DespesasServices/AlterarDespesasService';

export default class DespesasControllerEditar {
  async editar(request: Request, response: Response): Promise<Response> {
    try {
      const {nomeDespesas} = request.body
      const {id} = request.params

      const alterarDespesa = new AlterarDespesasService();

      const despesa = await alterarDespesa.execute({nomeDespesas, id})

      return response.json(despesa)

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
