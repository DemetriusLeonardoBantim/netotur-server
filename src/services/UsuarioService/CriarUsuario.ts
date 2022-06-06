import { getCustomRepository } from 'typeorm';
import { UsuarioRepositories } from '../../repositories/UsuarioRepositorie';

class CriarUsuarioService {
  async execute(body) {
    const usuarioRepository = getCustomRepository(UsuarioRepositories);

    const usuario = usuarioRepository.create(body);
    await usuarioRepository.save(usuario);
  }
}

export { CriarUsuarioService };
