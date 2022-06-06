import { getCustomRepository } from 'typeorm';
import { CarroRepositories } from '../../repositories/CarroRepositorie';

class ListarCarroService {
  async execute() {

    const carroRepository = getCustomRepository(CarroRepositories);

    const carro = carroRepository.find()

    return carro
  }
}

export { ListarCarroService };