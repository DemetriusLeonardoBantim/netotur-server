import { getCustomRepository } from 'typeorm';
import { DespesaRepositories } from '../../repositories/DespesasRepositorie';

class DeletarDespesasService {
  async execute({id}) {

    const despesasRepository = getCustomRepository(DespesaRepositories);

    const despesas = await despesasRepository.findOne(id)

    if(!despesas){
      throw new Error('Despesas não encontrado')
    }

    await despesasRepository.save(despesas);
  }
}

export { DeletarDespesasService };
