import { EntityRepository, Repository } from 'typeorm';
import { Carro } from '../entities/Carro';

@EntityRepository(Carro)
class CarroRepositories extends Repository<Carro> {}

export { CarroRepositories };
