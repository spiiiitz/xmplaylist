import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

  await knex.schema.createTable('track', table => {
    table.string('id', 24).notNullable().primary();
    table.string('name', 200).notNullable();
    table.jsonb('artists').defaultTo('[]').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('scrobble', table => {
    table.uuid('id').notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('track_id', 24);
    table.string('channel', 24).notNullable();
    table.timestamp('start_time').notNullable();

    table.unique(['channel', 'start_time']);

    table.foreign('track_id').references('track.id');
  });

  await knex.schema.createTable('spotify', table => {
    table.string('id', 24).primary().notNullable();
    table.string('spotify_id', 24).notNullable();
    table.string('name', 200).notNullable();
    table.string('cover');
    table.string('preview_url');

    table.foreign('id').references('track.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('track');
  await knex.schema.dropTable('scrobble');
}
