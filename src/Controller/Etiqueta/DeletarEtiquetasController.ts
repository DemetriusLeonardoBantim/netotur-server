import { Request, Response } from 'express';
import { DeletarEtiquetaService } from '../../services/EtiquetaService/DeleteEtiquetaService';

export default class EtiquetaControllerDeletar {
  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const {id} = request.params

      const deletarEtiqueta = new DeletarEtiquetaService();

      await deletarEtiqueta.execute({id})

      return response.json([])

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
