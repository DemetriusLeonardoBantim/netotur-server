import { EntityRepository, Repository } from 'typeorm';
import { Despesas } from '../entities/Despesas';

@EntityRepository(Despesas)
class DespesaRepositories extends Repository<Despesas> {}

export { DespesaRepositories };
