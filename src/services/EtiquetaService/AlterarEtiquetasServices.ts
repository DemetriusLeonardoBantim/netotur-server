import { getCustomRepository } from 'typeorm';
import { EtiquetaRepositories } from '../../repositories/EtiquetaRepositorie';

class AlterarEtiquetasService {
  async execute({inicial,final,id}) {

    const etiquetaRepository = getCustomRepository(EtiquetaRepositories);

    const etiqueta = await etiquetaRepository.findOne(id)

    if(!etiqueta){
      throw new Error('Etiqueta não encontrada')
    }
    etiqueta.inicial = inicial
    etiqueta.final = final

    await etiquetaRepository.save(etiqueta);
  }
}

export { AlterarEtiquetasService };
