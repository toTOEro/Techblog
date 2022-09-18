require('dotenv').config();

const Sequelize = require('sequelize');
let sequelize

if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
  // the application is executed on Heroku ... use the postgres         database
  sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL,
    {
      dialect: "postgres",
      protocol: "postgres",
      port: 5432,
      host: "<heroku host>",
      logging: true //false
    });
} else {
  sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
}

module.exports = sequelize;
