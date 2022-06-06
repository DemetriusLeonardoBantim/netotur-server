import { getCustomRepository } from 'typeorm';
import { UsuarioRepositories } from '../../repositories/UsuarioRepositorie';


class ListarUsuarioService {
  async execute() {

    const usuarioRepository = getCustomRepository(UsuarioRepositories);

    const funcionarios = usuarioRepository.find({
      relations:["grupoPermissao","agencia"]
    })

    return funcionarios
  }
}

export { ListarUsuarioService };


