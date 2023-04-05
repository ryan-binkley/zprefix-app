// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      password: 'docker',
      user: 'postgres',
      port: '5000',
      database: 'inventory_db'
    }
  },
};