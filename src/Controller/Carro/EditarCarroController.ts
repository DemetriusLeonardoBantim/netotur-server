import { Request, Response } from 'express';
import { AlterarCarroService } from '../../services/CarroService/AlterarCarroService';




export default class CarroControllerEditar {
  async editar(request: Request, response: Response): Promise<Response> {
    try {
      const {nomeCarro} = request.body
      const {id} = request.params

      const alterarCarro = new AlterarCarroService();

      const carro = await alterarCarro.execute({nomeCarro, id})

      return response.json(carro)

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
