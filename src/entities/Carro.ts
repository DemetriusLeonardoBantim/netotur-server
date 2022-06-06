import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Usuario } from './Usuario';

@Entity('carros')
class Carro {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  nomeCarro: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Carro };
