import { EntityRepository, Repository } from 'typeorm';
import { GrupoPermissao } from '../entities/GrupoPermissao';

@EntityRepository(GrupoPermissao)
class GrupoPermissaoRepositories extends Repository<GrupoPermissao> {}

export { GrupoPermissaoRepositories };
