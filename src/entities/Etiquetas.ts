import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm';
import { v4 as uuid } from 'uuid'

@Entity('etiquetas')
class Etiquetas {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  inicial: string;

  @Column()
  final: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Etiquetas };
