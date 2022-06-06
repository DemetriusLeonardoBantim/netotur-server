import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,

} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Usuario } from './Usuario';

@Entity('agencias')
class Agencia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nomeAgencia: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Agencia };
