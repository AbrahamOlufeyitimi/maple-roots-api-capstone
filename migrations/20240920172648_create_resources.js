/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) => {
    return knex.schema.createTable('resources', (table) => {
        table.increments('id').primary();
        table.string('school').notNullable();
        table.string('resource').notNullable();
        table.string('link').notNullable();
        table.boolean('completed').defaultTo(false);
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
    return knex.schema.dropTable('resources');
};