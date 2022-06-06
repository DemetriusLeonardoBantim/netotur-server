import { getCustomRepository } from 'typeorm';
import { EtiquetaRepositories } from '../../repositories/EtiquetaRepositorie';

class DeletarEtiquetaService {
  async execute({id}) {

    const etiquetaRepository = getCustomRepository(EtiquetaRepositories);

    const etiqueta = await etiquetaRepository.findOne(id)

    if(!etiqueta){
      throw new Error('Etiqueta não encontrado')
    }

    await etiquetaRepository.save(etiqueta);
  }
}

export { DeletarEtiquetaService };
