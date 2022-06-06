import { Request, Response } from 'express';
import { AlterarTiposDeDespesasService } from '../../services/TiposDeDespesasService/AlterarTiposDeDespesasService';

export default class TiposDeDespesasControllerEditar {
  async editar(request: Request, response: Response): Promise<Response> {
    try {
      const {nomeTipoDespesa} = request.body
      const {id} = request.params

      const tipoDespesaService = new AlterarTiposDeDespesasService();

      const tipoDeDespesa = await tipoDespesaService.execute({nomeTipoDespesa,id})

      return response.json(tipoDeDespesa)

    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
