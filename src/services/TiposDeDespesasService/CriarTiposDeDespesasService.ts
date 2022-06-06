import { getCustomRepository } from 'typeorm';
import { DespesaRepositories } from '../../repositories/DespesasRepositorie';

class CriarTiposDeDespesasService {
  async execute(body) {

    const tiposDeDespesas = getCustomRepository(DespesaRepositories);

    const tiposDepesas = tiposDeDespesas.create(body);

    await tiposDeDespesas.save(tiposDepesas);
  }
}

export { CriarTiposDeDespesasService };
