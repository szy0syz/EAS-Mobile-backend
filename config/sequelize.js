'use strict';

import sequelize from 'sequelize';
import config from './index';

const db = function () {
  return new sequelize(config.sqlseverUrl, config.sequelizeOptions);
}

export default db