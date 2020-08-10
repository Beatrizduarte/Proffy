import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id');

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE') // A cada atualização realizada, todas as aulas serão atualizadas.
      .onDelete('CASCADE'); //Se um professor for deletado a função vai fazer com que todas as aulas sejam deletadas também
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}