module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "knex_new",
      user: "postgres",
      password: "henrique",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
