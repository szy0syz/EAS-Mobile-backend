'use strict';

import express from 'express';
import formidable from 'formidable'
import BaseController from './baseController';

class UserHandle extends BaseController {
  constructor () {
    super();
    this.addUserPost = this.addUserPost.bind(this);
    this.uploadAvatar = this.uploadAvatar.bind(this);
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

  async addUserPost (req, res, next) {
    let userId;
    try {
      userId = await this.getId('userId');
    } catch (err) {
      res.send({
        type: 'ERROR_DATA',
        message: '获取数据失败'
      })
      return;
    }
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      try {
        if(!fields.loginName) throw new Error('必须填写用户名');
        if(!fields.password) throw new Error('必须填写密码');
        if(!fields.displayName) throw new Error('必须填写显示名称');
        if(!fields.phoneNumber) throw new Error('必须填写电话号码')
        if(!fields.defOrgId) throw new Error('默认组织不能为空');
      } catch (err) {
        res.send({
          type: 'ERROR_PARAMS',
          message: err.message
        })
        return;
      }
      const newUser = {
        loginName: fields.loginName,
        password: fields.password,
        displayName: fields.displayName,
        phoneNumber: fields.phoneNumber,
        defOrg: {}
      }
      newUser.defOrg.orgID = fields.defOrgId;
      newUser.defOrg.orgName = fields.defOrgName;
      res.send(newUser);
      return;
    });
  }

  // 注册用户的get请求，要查询SqlServer的数据。
  async regUserGet (req, res, next) {
    // 这里要么不用原始查询，直接用sequelize的orm查询吧。
    // 首先得先用sequelize去sqlserver里同步一些表结构的model出来
  }
}

export default new UserHandle()