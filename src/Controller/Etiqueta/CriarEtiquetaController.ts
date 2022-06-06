import { Request, Response } from 'express';
import { CriarEtiquetaService } from '../../services/EtiquetaService/CriarEtiquetaService';

export default class EtiquetaController {
  async criar(request: Request, response: Response) {
    try {
      const body = request.body;
      const criarEtiquetaService = new CriarEtiquetaService();
    
      const etiqueta = await criarEtiquetaService.execute(body);

      return response.status(200).json(body);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
