import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class FormaDePagamento1643820626107 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'formasDePagamento',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy:'uuid',
            default:'uuid_generate_v4()'
          },
          {
            name: 'formaDePagamento',
            type: 'text',
            isUnique: true,
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
    await queryRunner.dropTable('formasDePagamento');
  }
}