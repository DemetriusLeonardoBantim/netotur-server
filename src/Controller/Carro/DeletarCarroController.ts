import { Request, Response } from 'express';
import { DeletarCarroService } from '../../services/CarroService/DeleteCarro';

export default class CarroControllerDeletar {
  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const {id} = request.params

      const deletarCarro = new DeletarCarroService();

      await deletarCarro.execute({id})

      return response.json([])

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
