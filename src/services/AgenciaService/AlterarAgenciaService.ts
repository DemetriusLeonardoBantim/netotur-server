import { getCustomRepository } from 'typeorm';
import { AgenciaRepositories } from '../../repositories/AgenciaRepositorie';

class AlterarAgenciaService {
  async execute({nomeAgencia,id}) {

    const agenciaRepository = getCustomRepository(AgenciaRepositories);

    const agencia = await agenciaRepository.findOne(id)

    if(!agencia){
      throw new Error('Agência não encontrada')
    }
    agencia.nomeAgencia = nomeAgencia


    await agenciaRepository.save(agencia);
  }
}

export { AlterarAgenciaService };
