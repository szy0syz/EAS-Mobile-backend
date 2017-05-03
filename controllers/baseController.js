
import Sequelize from '../config/sequelize';
import loadModel from '../utils/loadSequelizeModel'

export default class BaseController {
  constructor () {

  }

  async baseQuery(sql = '', conditions = '', modelName = '') {
    const sequelize = Sequelize();
    const PurInEntry = loadModel(sequelize, modelName);
    const promise = sequelize.query(sql + conditions, {
      type: sequelize.QueryTypes.SELECT,
      model: PurInEntry
    });
    return promise;
  }
}