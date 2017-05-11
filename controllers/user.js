'use strict';

import express from 'express';
import BaseController from './baseController';

class UserHandle extends BaseController {
  constructor () {
    super();
    this.uploadImg = this.uploadImg.bind(this); //将父类this传入子类
  }

  async uploadAvatar(req, res, next) {
    try {
      let path = await this.uploadImg(req, 'shop');
      res.send({
        status: 1,
        image_path: path
      })
    } catch (err) {
      res.send({
        type: 'ERROR_PATH',
        message: '上传头像失败',
        status: 0
      })
    }
  }
}

export default new UserHandle()