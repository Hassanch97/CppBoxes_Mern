require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = {
  app: {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || 'development',
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    name: process.env.DB_NAME || 'cpp',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'supersecretkey',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  },
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
  },
};

const sequelize = new Sequelize(config.db.name, config.db.user, config.db.password, {
  host: config?.db?.host,
  dialect: 'mysql',
});
module.exports = {config,sequelize};