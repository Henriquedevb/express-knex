// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.SECRET_DB,
      user: process.env.SECRET_USER,
      password: process.env.SECRET_PASSWORD,
    },
  },
};
