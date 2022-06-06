import { getCustomRepository } from 'typeorm';
import { TiposDeDepesasRepositories } from '../../repositories/TiposDeDespesaRepositorie';

class AlterarTiposDeDespesasService {
  async execute({nomeTipoDespesa,id}) {

    const tipoDespesaRepository = getCustomRepository(TiposDeDepesasRepositories);

    const tipoDespesa = await tipoDespesaRepository.findOne(id)

    if(!tipoDespesa){
      throw new Error('Tipo de despesa não encontrado')
    }
    tipoDespesa.nomeTipoDespesa = nomeTipoDespesa

    await tipoDespesaRepository.save(tipoDespesa);
  }
}

export { AlterarTiposDeDespesasService };
