import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import {Agencia} from './Agencias'
import {GrupoPermissao} from './GrupoPermissao'

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  nomeUsuario: string;

  @Column()
  emailUsuario: string;

  @Column()
  senhaUsuario: string;
  
  @Column()
  desconto: boolean;

  @Column()
  movimentacaoPropria: boolean;

  @OneToOne(() => GrupoPermissao)
  @JoinColumn({name:"idGrupoPermissao"})
  grupoPermissao:GrupoPermissao
  @Column()
  idGrupoPermissao: string;

  @OneToOne(() => Agencia)
  @JoinColumn({name: "idAgencia"})
  agencia:Agencia
  @Column()
  idAgencia: string;

  @Column({nullable:true})
  dataBloqueado: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Usuario };
