'use strict';

import sequelize from 'sequelize';

const db = function (config) {
  return new sequelize(config.connectionStr, config.Options);
}

export default db