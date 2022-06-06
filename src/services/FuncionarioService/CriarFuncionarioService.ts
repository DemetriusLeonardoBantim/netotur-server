import { getCustomRepository } from 'typeorm';
import { FuncionarioRepositories } from '../../repositories/FuncionarioRepositorie';

class CriarFuncionarioService {
  async execute(body) {

    const funcionarioRepository = getCustomRepository(FuncionarioRepositories);

    const funcionario = funcionarioRepository.create(body);

    await funcionarioRepository.save(funcionario);
  }
}

export { CriarFuncionarioService };
