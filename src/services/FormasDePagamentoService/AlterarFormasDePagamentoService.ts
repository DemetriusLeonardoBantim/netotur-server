import { getCustomRepository } from 'typeorm';
import { FormasDePagamentoRepositorie } from '../../repositories/FormasDePagamentoRepositorie';

class AlterarFormasDePagamentoService {
  async execute({formaDePagamento,id}) {

    const formaDePagamentoRepository = getCustomRepository(FormasDePagamentoRepositorie);

    const buscarFormaDePagamento = await formaDePagamentoRepository.findOne(id)

    if(!buscarFormaDePagamento){
      throw new Error('Forma de pagamento não encontrada')
    }
    buscarFormaDePagamento.formaDePagamento = formaDePagamento


    await formaDePagamentoRepository.save(buscarFormaDePagamento);
  }
}

export { AlterarFormasDePagamentoService };
