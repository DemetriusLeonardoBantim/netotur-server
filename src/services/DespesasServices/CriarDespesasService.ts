import { getCustomRepository } from 'typeorm';
import { DespesaRepositories } from '../../repositories/DespesasRepositorie';

class CriarDespesasService {
  async execute(body) {

    const despesaRepository = getCustomRepository(DespesaRepositories);

    const despesas = despesaRepository.create(body);

    await despesaRepository.save(despesas);
  }
}

export { CriarDespesasService };
