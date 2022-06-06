import { getCustomRepository } from 'typeorm';
import { DespesaRepositories } from '../../repositories/DespesasRepositorie';

class DeletarGrupoPermissaoService {
  async execute({id}) {

    const grupoPermissaoRepository = getCustomRepository(DespesaRepositories);

    const grupoPermissao = await grupoPermissaoRepository.findOne(id)

    if(!grupoPermissao){
      throw new Error('Funcionario não encontrado')
    }

    await grupoPermissaoRepository.save(grupoPermissao);
  }
}

export { DeletarGrupoPermissaoService };
