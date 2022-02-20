// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "knex_teste",
      user: "postgres",
      password: process.env.SECRET_DB,
    },
  },
};
