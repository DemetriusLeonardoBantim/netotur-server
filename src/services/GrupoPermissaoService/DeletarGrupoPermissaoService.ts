import { getCustomRepository } from 'typeorm';
import { GrupoPermissaoRepositories } from '../../repositories/GruposPermissaoRepositorie';

class DeletarGrupoPermissaoService {
  async execute({id}) {

    const grupoPermissaoRepository = getCustomRepository(GrupoPermissaoRepositories);

    const grupoPermissao = await grupoPermissaoRepository.findOne(id)

    if(!grupoPermissao){
      throw new Error('Funcionario não encontrado')
    }

    await grupoPermissaoRepository.save(grupoPermissao);
  }
}

export { DeletarGrupoPermissaoService };
