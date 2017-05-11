'use strict';

import express from 'express';
import BaseController from './baseController';

class UserHandle extends BaseController {
  constructor () {
    super();
    this.uploadAvatar = this.uploadAvatar.bind(this); //将父类this传入子类
  }

  async uploadAvatar(req, res, next) {
    try {
      let path = await this.uploadImg(req, 'user');
      console.log({path: path});
      res.send({
        status: 1,
        image_path: path
      })
    } catch (err) {
      console.log(err);
      res.send({
        type: 'ERROR_PATH',
        message: '上传头像失败',
        status: 0
      })
    }
  }
}

export default new UserHandle()