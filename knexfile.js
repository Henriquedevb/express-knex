module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.SECRET_DB,
      user: process.env.SECRET_USER,
      password: process.env.SECRET_PASSWORD,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
  },
};
