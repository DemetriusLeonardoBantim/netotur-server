import { getCustomRepository } from 'typeorm';
import { CarroRepositories } from '../../repositories/CarroRepositorie';

class CriarCarroService {
  async execute(body) {

    const carroRepository = getCustomRepository(CarroRepositories);

    const carro = carroRepository.create(body);

    await carroRepository.save(carro);
  }
}

export { CriarCarroService };
