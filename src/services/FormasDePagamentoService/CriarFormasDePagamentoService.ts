import { getCustomRepository } from 'typeorm';
import { FormasDePagamentoRepositorie } from '../../repositories/FormasDePagamentoRepositorie';

class CriarFormasDePagamentoService {
  async execute(body) {

    const formasDePagamentoRepository = getCustomRepository(FormasDePagamentoRepositorie);

    const formasDePagamento = formasDePagamentoRepository.create(body);

    await formasDePagamentoRepository.save(formasDePagamento);
  }
}

export { CriarFormasDePagamentoService };
