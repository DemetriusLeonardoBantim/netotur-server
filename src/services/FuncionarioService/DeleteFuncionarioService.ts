import { getCustomRepository } from 'typeorm';
import { FuncionarioRepositories } from '../../repositories/FuncionarioRepositorie';

class DeletarFuncionarioService {
  async execute({id}) {

    const funcionarioRepository = getCustomRepository(FuncionarioRepositories);

    const funcionario = await funcionarioRepository.findOne(id)

    if(!funcionario){
      throw new Error('Funcionario não encontrado')
    }

    await funcionarioRepository.save(funcionario);
  }
}

export { DeletarFuncionarioService };
