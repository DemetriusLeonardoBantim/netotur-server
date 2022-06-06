import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('grupoDePermissao')
class GrupoPermissao {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  nomeGrupoPermissao: string;
  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { GrupoPermissao };
