import { getCustomRepository } from 'typeorm';
import { AgenciaRepositories } from '../../repositories/AgenciaRepositorie';

class DeletarAgenciaService {
  async execute({id}) {

    const agenciaRepository = getCustomRepository(AgenciaRepositories);

    const agencia = await agenciaRepository.findOne(id)

    if(!agencia){
      throw new Error('Agência não encontrada')
    }

    await agenciaRepository.save(agencia);
  }
}

export { DeletarAgenciaService };
