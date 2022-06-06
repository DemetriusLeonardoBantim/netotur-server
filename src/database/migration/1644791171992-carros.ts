import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class carro1644374520862 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'carros',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy:'uuid',
            default:'uuid_generate_v4()'
          },
          {
            name: 'nomeCarro',
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
    await queryRunner.dropTable('carros');
  }
}