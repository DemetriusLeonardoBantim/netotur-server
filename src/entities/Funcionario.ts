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

@Entity('funcionarios')
class Funcionario {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  nomeFuncionario: string;

  @Column()
  dataNascimento: Date;

  @Column()
  numeroCpf: string;

  @Column()
  numeroCnh: string;

  @Column()
  numeroRg: string;

  @Column()
  dataAdmissao: Date;

  @Column({nullable:true})
  dataDemissao: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Funcionario };
