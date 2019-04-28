/* ---------------------------------------------------------------------------------
   * @ description : This is the db configration file.
---------------------------------------------------------------------------------- */

import Sequelize from 'sequelize';
import Bluebird from 'bluebird';
import config from 'config';
import logger from './utilities/logger';

// Connect to MongoDB
const db = config.get('db');

export default async () => {
  // Build the connection string.
  
  // const mongoUrl = db.auth ? `mongodb://${db.username}:${db.password}@${db.host}:${db.port}/${db.name}` : `mongodb://${db.host}:${db.port}/${db.name}`;

  const sequelize = new Sequelize('codementor', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  
  sequelize.sync({ force: true })
  .then(() => {
    logger.info(`Database & tables created!`)
  })
};
