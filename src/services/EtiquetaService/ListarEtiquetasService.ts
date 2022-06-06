import { getCustomRepository } from 'typeorm';
import { EtiquetaRepositories } from '../../repositories/EtiquetaRepositorie';

class ListarEtiquetasService {
  async execute() {

    const etiquetaRepository = getCustomRepository(EtiquetaRepositories);

    const etiquetas = etiquetaRepository.find()

    return etiquetas
  }
}

export { ListarEtiquetasService };