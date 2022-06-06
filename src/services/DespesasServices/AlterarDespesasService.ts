import { getCustomRepository } from 'typeorm';
import { DespesaRepositories } from '../../repositories/DespesasRepositorie';

class AlterarDespesasService {
  async execute({nomeDespesas,id}) {

    const despesasRepository = getCustomRepository(DespesaRepositories);

    const despesas = await despesasRepository.findOne(id)

    if(!despesas){
      throw new Error('Carro não encontrado')
    }
    despesas.nomeDespesas = nomeDespesas


    await despesasRepository.save(despesas);
  }
}

export { AlterarDespesasService };
