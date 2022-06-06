import { getCustomRepository } from 'typeorm';
import { GrupoPermissaoRepositories } from '../../repositories/GruposPermissaoRepositorie';


class GrupoPermissaoService {
  async execute() {
    
    const grupoPermissaoRepository = getCustomRepository(GrupoPermissaoRepositories);

    const grupoPermissao = grupoPermissaoRepository.find()

    return grupoPermissao
  }
}

export { GrupoPermissaoService };