import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Usuario } from './Usuario';

@Entity('tiposDeDespesas')
class TiposDespesas {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  nomeTipoDespesa: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { TiposDespesas };
