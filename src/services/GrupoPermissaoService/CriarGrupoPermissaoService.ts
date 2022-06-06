import { getCustomRepository } from 'typeorm';
import { GrupoPermissaoRepositories } from '../../repositories/GruposPermissaoRepositorie';

class CriarGrupoPermissao {
  async execute(body) {

    const grupoPermissaoRepository = getCustomRepository(GrupoPermissaoRepositories);

    const grupoPermissao = grupoPermissaoRepository.create(body);

    await grupoPermissaoRepository.save(grupoPermissao);
  }
}

export { CriarGrupoPermissao };
