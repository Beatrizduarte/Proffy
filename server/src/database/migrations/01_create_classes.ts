import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id');
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE') // A cada atualização realizada, todas as aulas serão atualizadas.
      .onDelete('CASCADE'); //Se um professor for deletado a função vai fazer com que todas as aulas sejam deletadas também
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}