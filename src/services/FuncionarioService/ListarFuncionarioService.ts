import { getCustomRepository } from 'typeorm';
import { FuncionarioRepositories } from '../../repositories/FuncionarioRepositorie';


class ListarFuncionariosService {
  async execute() {

    const funcionariosRepository = getCustomRepository(FuncionarioRepositories);

    const funcionarios = funcionariosRepository.find()

    return funcionarios
  }
}

export { ListarFuncionariosService };