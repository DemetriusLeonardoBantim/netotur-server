import { getCustomRepository } from 'typeorm';
import { CarroRepositories } from '../../repositories/CarroRepositorie';

class DeletarCarroService {
  async execute({id}) {

    const carroRepository = getCustomRepository(CarroRepositories);

    const carro = await carroRepository.findOne(id)

    if(!carro){
      throw new Error('Carro não encontrado')
    }

    await carroRepository.save(carro);
  }
}

export { DeletarCarroService };
