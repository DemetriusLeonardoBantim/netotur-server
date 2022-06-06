import { getCustomRepository } from 'typeorm';
import { CarroRepositories } from '../../repositories/CarroRepositorie';

class AlterarCarroService {
  async execute({nomeCarro,id}) {

    const carroRepository = getCustomRepository(CarroRepositories);

    const carro = await carroRepository.findOne(id)

    if(!carro){
      throw new Error('Carro não encontrado')
    }
    carro.nomeCarro = nomeCarro


    await carroRepository.save(carro);
  }
}

export { AlterarCarroService };
