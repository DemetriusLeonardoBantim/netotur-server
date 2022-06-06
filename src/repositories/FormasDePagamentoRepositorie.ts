import { EntityRepository, Repository } from 'typeorm';
import { FormasDePagamento } from '../entities/FormasDePagamento';

@EntityRepository(FormasDePagamento)
class FormasDePagamentoRepositorie extends Repository<FormasDePagamento> {}



export { FormasDePagamentoRepositorie };
