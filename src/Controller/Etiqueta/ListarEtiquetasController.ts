import { Request, Response } from 'express';
import { ListarEtiquetasService } from '../../services/EtiquetaService/ListarEtiquetasService';

export default class EtiquetasControllerListar {
  async listar(request: Request, response: Response): Promise<Response> {
    try {
      const listarEtiquetasService = new ListarEtiquetasService();

      const etiquetas = await listarEtiquetasService.execute();

      return response.json(etiquetas);
    } catch (err) {

      return response.status(400).json({ error: err.message });

    }
  }
}
