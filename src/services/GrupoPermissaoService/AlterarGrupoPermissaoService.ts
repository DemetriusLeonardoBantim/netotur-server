import { getCustomRepository } from 'typeorm';
import { GrupoPermissaoRepositories } from '../../repositories/GruposPermissaoRepositorie';

class AlterarGrupoPermissaoService {
  async execute({nomeGrupoPermissao,id}) {

    const grupoPermissaoRepository = getCustomRepository(GrupoPermissaoRepositories);

    const buscarGrupoPermissao = await grupoPermissaoRepository.findOne(id)

    if(!buscarGrupoPermissao){
      throw new Error('Grupo permissao não encontrado')
    }
    buscarGrupoPermissao.nomeGrupoPermissao = nomeGrupoPermissao


    await grupoPermissaoRepository.save(buscarGrupoPermissao);
  }
}

export { AlterarGrupoPermissaoService };
