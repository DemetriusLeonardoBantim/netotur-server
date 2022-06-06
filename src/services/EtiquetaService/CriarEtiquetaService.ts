import { getCustomRepository } from 'typeorm';
import { EtiquetaRepositories } from '../../repositories/EtiquetaRepositorie';

class CriarEtiquetaService {
  async execute(body) {

    const etiquetaRepository = getCustomRepository(EtiquetaRepositories);

    const etiqueta = etiquetaRepository.create(body);


    await etiquetaRepository.save(etiqueta);
  }
}

export { CriarEtiquetaService };
