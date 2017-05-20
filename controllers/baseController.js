
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
      const form = new formidable.IncomingForm(); // 实例化子类
      form.uploadDir = './public/img/' + type; // 定义上传路径。注意：这里formidable是从node_modules来的，所以'./'所指的是整个程序的CWD。
      form.parse(req, async (err, fields, files) => { // 转换formdata，指明callback是异步，里面有await！
        let imgId;
        try {
          imgId = await this.getId('imgId') // 从数据库从获取图片id流水号
        } catch (err) {
          console.log('获取图片id失败');
          fs.unlink(files.file.path); // 如果失败解除文件链接
          reject(err);
        }
        const imgUrl = new Date().getTime().toString() + imgId; // 文件的命为当前时间数字串
        const extname = path.extname(files.upload.name); // 获取文件后缀名 .jpg
        const repath = './public/img/' + type + '/' + imgUrl + extname;
        try {
          await fs.rename(files.upload.path, repath); // 按指定格式重命名上传文件
          gm(repath) // 缩放图片尺寸
            .resize(400, 400, '!') // 限制大小
            .write(repath, async (err) => {
              if (err) { // 尝试写入，报错则reject
                console.log('改写图片尺寸失败');
                fs.unlink(repath);
                reject(err);
              } else {
                resolve(repath.replace(/^\.\/public/, '')); // 所有成功只返回图片路径，替换'/publc'
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