import { EntityRepository, Repository } from 'typeorm';
import { Agencia } from '../entities/Agencias';

@EntityRepository(Agencia)

class AgenciaRepositories extends Repository<Agencia> {}


export { AgenciaRepositories };
