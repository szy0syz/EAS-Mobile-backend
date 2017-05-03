
import Sequelize from '../config/sequelize';
import loadModel from '../utils/loadSequelizeModel'
import loadSql from '../utils/loadSqlCommand'

export default class BaseController {
  constructor () {

  }

  async baseQuery(conditions = '', modelName = '') {
    const sequelize = Sequelize();
    const sql = loadSql(modelName);
    const PurInEntry = loadModel(sequelize, modelName);
    const promise = sequelize.query(sql + conditions, {
      type: sequelize.QueryTypes.SELECT,
      model: PurInEntry
    });
    return promise;
  }
}