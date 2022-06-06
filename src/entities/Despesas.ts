import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Usuario } from './Usuario';

@Entity('despesas')
class Despesas {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  nomeDespesas: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Despesas };
