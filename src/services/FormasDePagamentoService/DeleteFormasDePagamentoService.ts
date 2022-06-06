import { getCustomRepository } from 'typeorm';
import { FormasDePagamentoRepositorie } from '../../repositories/FormasDePagamentoRepositorie';

class DeletarFormasDePagamentoService {
  async execute({id}) {

    const formasDePagamentoRepository = getCustomRepository(FormasDePagamentoRepositorie);

    const formasDePagagamento = await formasDePagamentoRepository.findOne(id)

    if(!formasDePagagamento){
      throw new Error('Forma de pagamento não encontrado')
    }

    await formasDePagamentoRepository.save(formasDePagagamento);
  }
}

export { DeletarFormasDePagamentoService };
