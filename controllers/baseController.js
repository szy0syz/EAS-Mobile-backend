'use strict';

import Sequelize from '../config/sequelize';
import loadModel from '../utils/loadSequelizeModel'

export default class BaseController {
  constructor () {

  }

  async query(sql = '', conditions = '', model = {}) {
    const sequelize = Sequelize();
    const PurInEntry = loadModels(sequelize, 'PurInEntry');
    const purInQuery = sequelize.query(sql + conditions, {
      type: sequelize.QueryTypes.SELECT,
      model: model
    });
    return query;
  }
}