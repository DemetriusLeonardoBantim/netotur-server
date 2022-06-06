import { EntityRepository, Repository } from 'typeorm';
import { Funcionario } from '../entities/Funcionario';

@EntityRepository(Funcionario)
class FuncionarioRepositories extends Repository<Funcionario> {}

export { FuncionarioRepositories };
