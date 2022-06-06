import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Usuario1643983558030 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy:'uuid',
            default:'uuid_generate_v4()'
          },
          {
            name: 'nomeUsuario',
            type: 'text',
          },
          {
            name: 'emailUsuario',
            type: 'text',
          },
          {
            name: 'senhaUsuario',
            type: 'text',
          },
          {
            name: 'desconto',
            type: 'bit',
          },
          {
            name: 'movimentacaoPropria',
            type: 'bit',
          },
          {
            name: 'idGrupoPermissao',
            type: 'uuid',
          },
          {
            name: 'idAgencia',
            type: 'uuid',
          },
          {
            name: 'dataBloqueado',
            type: 'timestamp',
            isNullable:true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_grupos_permissao',
            columnNames:["idGrupoPermissao"],
            referencedTableName:"gruposDePermissao",
            referencedColumnNames:["id"]
          } ,
          {
            name: 'fk_agencia',
            columnNames:["idAgencia"],
            referencedTableName:"agencias",
            referencedColumnNames:["id"]
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios');
  }
}