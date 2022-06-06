import { getCustomRepository } from 'typeorm';
import { FormasDePagamentoRepositorie } from '../../repositories/FormasDePagamentoRepositorie';


class ListarFormaDePagamentoService {
  async execute() {

    const formasDePagamentoRepository = getCustomRepository(FormasDePagamentoRepositorie);

    const formasDePagamento = formasDePagamentoRepository.find()

    return formasDePagamento
  }
}

export { ListarFormaDePagamentoService };