import { Request, Response } from 'express';
import { AlterarEtiquetasService } from '../../services/EtiquetaService/AlterarEtiquetasServices';

export default class EtiquetasControllerEditar {
  async editar(request: Request, response: Response): Promise<Response> {
    try {
      const {inicial,final} = request.body
      const {id} = request.params

      const alterarEtiquetas = new AlterarEtiquetasService();

      const etiqueta = await alterarEtiquetas.execute({inicial,final,id})

      return response.json(etiqueta)

    } catch (err) {
      
      return response.status(400).json({ error: err.message });
    }
  }
}
