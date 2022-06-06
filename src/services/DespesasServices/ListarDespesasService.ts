import { getCustomRepository } from 'typeorm';
import { DespesaRepositories } from '../../repositories/DespesasRepositorie';

class ListarDespesasService {
  async execute() {

    const despesasRepository = getCustomRepository(DespesaRepositories);

    const despesas = despesasRepository.find()

    return despesas
  }
}

export { ListarDespesasService };