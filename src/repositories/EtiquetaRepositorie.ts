import { EntityRepository, Repository } from 'typeorm';
import { Etiquetas } from '../entities/Etiquetas';

@EntityRepository(Etiquetas)
class EtiquetaRepositories extends Repository<Etiquetas> {}

export { EtiquetaRepositories };
