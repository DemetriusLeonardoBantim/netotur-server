import { getCustomRepository } from 'typeorm';
import { AgenciaRepositories } from '../../repositories/AgenciaRepositorie';

class CriarAgenciaService {
  async execute(body) {
    
    const agenciaRepository = getCustomRepository(AgenciaRepositories);

    const agentecia = agenciaRepository.create(body);

    await agenciaRepository.save(agentecia);
  }
}

export { CriarAgenciaService };
