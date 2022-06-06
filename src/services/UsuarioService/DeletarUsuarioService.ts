import { getCustomRepository } from 'typeorm';
import { UsuarioRepositories } from '../../repositories/UsuarioRepositorie';

class DeletarFuncionarioService {
  async execute({id}) {

    const funcionarioRepository = getCustomRepository(UsuarioRepositories);

    const funcionario = await funcionarioRepository.findOne(id)

    if(!funcionario){
      throw new Error('Funcionario não encontrado')
    }

    await funcionarioRepository.save(funcionario);
  }
}

export { DeletarFuncionarioService };
