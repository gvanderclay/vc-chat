module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/vc_chat",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/dev"
    },
    useNullAsDefault: true
  },

  test: {
    client: "pg",
    connection: "postgres://localhost/vc_chat_test",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/test"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    migrations: {
      directory: "./db/migrations"
    },
    connection: {
      database: process.env.DATABASE_URL,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD
    },
    seeds: {
      directory: "./db/seeds/production"
    },
    useNullAsDefault: true
  }
};
