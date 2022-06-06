import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class funcionario1644374603034 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'funcionarios',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy:'uuid',
            default:'uuid_generate_v4()'
          },
          {
            name: 'nomeFuncionario',
            type: 'text',
          },
          {
            name: 'dataNascimento',
            type: 'timestamp',
          },
          {
            name: 'numeroCpf',
            type: 'text',
            isUnique: true,
          },
          {
            name: 'numeroCnh',
            type: 'text',
            isUnique: true,
          },
          {
            name: 'numeroRg',
            type: 'text',
            isUnique: true,
          },
          {
            name: 'dataAdmissao',
            type: 'timestamp',
          },
          {
            name: 'dataDemissao',
            type: 'timestamp',
            isNullable:true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('funcionarios');
  }
}