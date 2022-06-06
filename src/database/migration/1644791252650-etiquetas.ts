import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Etiquetas1643823244163 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'etiquetas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy:'uuid',
            default:'uuid_generate_v4()'
          },
          {
            name: 'inicial',
            type: 'text',
            isUnique: true,
          },
          {
            name: 'final',
            type: 'int',
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
    await queryRunner.dropTable('etiquetas');
  }
}