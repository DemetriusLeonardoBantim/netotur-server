import { EntityRepository, Repository } from 'typeorm';
import { TiposDespesas } from '../entities/TiposDespesas';

@EntityRepository(TiposDespesas)
class TiposDeDepesasRepositories extends Repository<TiposDespesas> {}

export { TiposDeDepesasRepositories };
