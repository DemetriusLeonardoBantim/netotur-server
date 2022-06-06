import { EntityRepository, Repository } from 'typeorm';
import { Usuario } from '../entities/Usuario';

@EntityRepository(Usuario)
class UsuarioRepositories extends Repository<Usuario> {}

export { UsuarioRepositories };
