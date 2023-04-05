/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) => {
    return knex.schema.createTable('items', table => {
        table.increments('id');
        table.integer('user_id');
        table.foreign('user_id').references('users');
        table.text('item_name');
        table.text('description');
        table.integer('quantity');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
    return knex.schema.dropTableIfExists('items');
};
