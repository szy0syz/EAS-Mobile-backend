
import Sequelize from '../config/sequelize';
import loadModel from '../utils/loadSequelizeModel'
import loadSql from '../utils/loadSqlCommand'
import formidable from 'formidable'
import Ids from '../models/ids'
import path from 'path'
import fs from 'fs'
import gm from 'gm'

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

  async getId (type) {
    const typeList = ['userId', 'imgId'];
    if (!typeList.includes(type)) {
      console.log('id类型错误');
      throw new Error('id类型错误');
    }
    try {
      const idData = await Ids.findOne();
      idData[type] ++;
      await idData.save();
      return idData[type];
    } catch (err) {
      throw new Error(err);
    }
  }

  // '<form action="http://127.0.0.1:8001/user/upload" enctype="multipart/form-data" method="post">'
  async uploadImg(req, type = 'default') {
    return new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm();
      form.uploadDir = './public/img/' + type;
      form.parse(req, async (err, fields, files) => {
        let imgId;
        try {
          imgId = await this.getId('imgId')
        } catch (err) {
          console.log('获取图片id失败');
          fs.unlink(files.file.path);
          reject(err);
        }
        const imgUrl = new Date().getTime().toString() + imgId;
        const extname = path.extname(files.upload.name);
        const repath = './public/img/' + type + '/' + imgUrl + extname;
        try {
          await fs.rename(files.upload.path, repath);
          gm(repath)
            .resize(400, 400, '!')
            .write(repath, async (err) => {
              if (err) {
                console.log('改写图片尺寸失败');
                fs.unlink(repath);
                reject(err);
              } else {
                resolve(repath.replace(/^\.\/public/, ''));
              }
            })
        } catch (err) {
          console.log('改写图片路径失败');
          fs.unlink(files.upload.path);
          reject(err);
        }
      });
    });
  }
}