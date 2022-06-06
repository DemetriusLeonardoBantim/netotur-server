import { getCustomRepository } from 'typeorm';
import { AgenciaRepositories } from '../../repositories/AgenciaRepositorie';

class ListarAgenciaService {
  async execute() {

    const agenciaRepository = getCustomRepository(AgenciaRepositories);

    const agentecias = agenciaRepository.find()

    return agentecias
  }
}

export { ListarAgenciaService };