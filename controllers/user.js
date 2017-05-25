'use strict';

import crypto from 'crypto'
import express from 'express'
import formidable from 'formidable'
import UserModel from '../models/user'
import BaseController from './baseController'

class UserHandle extends BaseController {
  constructor () {
    super()
    this.login = this.login.bind(this)
    this.encryption = this.encryption.bind(this)
    this.addUserPost = this.addUserPost.bind(this)
    this.uploadAvatar = this.uploadAvatar.bind(this)
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
    const cap = req.cookies.cap
    // let userId;
    // try {
    //   userId = await this.getId('userId');
    // } catch (err) {
    //   res.send({
    //     type: 'ERROR_DATA',
    //     message: '获取数据失败'
    //   })
    //   return
    // }
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      const { loginName, password, displayName, phoneNumber } = fields
      try {
        if(!loginName) throw new Error('必须填写用户名');
        if(!password) throw new Error('必须填写密码');
        if(!displayName) throw new Error('必须填写显示名称');
        if(!phoneNumber) throw new Error('必须填写电话号码')
      } catch (err) {
        res.send({
          type: 'ERROR_PARAMS',
          message: err.message
        })
        return
      }
      const md5password = this.encryption(password)
      const newUser = {
        loginName: loginName,
        password: md5password,
        displayName: displayName,
        phoneNumber: phoneNumber
      }
      const createdUser = new UserModel(newUser)
      createdUser = await createdUser.save()
      res.send({
        statue: 1,
				message: '注册成功'
      });
      return
    });
  }

  async login (req, res, next) {
    const cap = req.cookies.cap
    if (!cap) {
      res.send({
        status: 0,
        type: 'ERROR_CAPTCHA',
        message: '验证码失效'
      })
      return
    }

    const form = new formidable.IncomingForm()
    form.parse(req, async (err, fields, files) => {
      const { loginName, password, captcha_code } = fields
      try {
        if (!loginName) {
          throw new Error('用户名参数错误')
        } else if (!password) {
          throw new Error('密码参数错误')
        } else if (!captcha_code) {
          throw new Error('验证码参数错误')
        }
      } catch (err) {
        console.log('登录参数错误', err)
        res.send({
          statue: 0,
          type: 'ERROR_QUERY',
          message: err.message
        })
        return
      }
      if (cap.toString() !== captcha_code.toString()) {
        res.send({
          status: 0,
          type: 'ERROR_CAPTCHA',
          message: '验证码不正确'
        })
        return
      }
      // 使用加盐的md5加密
      const md5password = this.encryption(password)
      try {
        const user = await UserModel.findOne({ loginName })
        if (!user) {
          res.send({
            status: 0,
            type: 'ERROR_ACCOUNT',
            message: '用户不存在'
          }) // 这里意思把加盐md5算法放在前端，有点不妥。
        } else if (user.password.toString() !== md5password.toString()) {
          res.send({
            statue: 0,
            type: 'ERROR_PASSWORD',
            message: '密码错误'
          })
        } else {
          req.session.user = user // 直接存整个user对象, 因为以后要合成查询过滤条件
          // 这里还需要构建一个前端专用的userInfo对象
          res.send({ // 这里要改~
            statue: 1,
				    message: '注册成功'
          });
        }
      } catch (err) {
        console.log('注册失败', err);
				res.send({
					status: 0,
					type: 'SAVE_USER_FAILED',
					message: '注册失败',
				})
      }

    })
  }

  // 注册用户的get请求，要查询SqlServer的数据。
  async regUserGet (req, res, next) {
    // 这里要么不用原始查询，直接用sequelize的orm查询吧。
    // 首先得先用sequelize去sqlserver里同步一些表结构的model出来
  }

  async signout (req, res, next) {
    req.session.user = null
    res.send({
      status: 1,
      message: '退出成功'
    })
  }

  async changePassword (req, res, next) {
    const cap = req.cookies.cap
    if (!cap) {
      res.send({
				status: 0,
				type: 'ERROR_CAPTCHA',
				message: '验证码失效',
			})
			return
    }
    const form = new formidable.IncomingForm()
    form.parse(req, async (err, fields, files) => {
      const {loginName, oldpassword, newpassword, confirmpassword, captcha_code} = fields
      try {
        if (!loginName) {
          throw new Error('用户名参数错误')
        } else if (!oldpassword) {
          throw new Error('必须添加旧密码')
        } else if (!newpassword) {
          throw new Error('必须填写新密码')
        } else if(!confirmpassword){
					throw new Error('必须填写确认密码');
				}else if(newpassword !== confirmpassword){
					throw new Error('两次密码不一致');
				}else if(!captcha_code){
					throw new Error('请填写验证码');
				}
      } catch (err) {
        console.log('修改密码参数错误', err)
        res.send({
          status: 0,
          type: 'ERROR_QUERY',
          message: err.message
        })
        return
      }
      if (cap.toString() !== captcha_code.toString()) {
        res.send({
					status: 0,
					type: 'ERROR_CAPTCHA',
					message: '验证码不正确',
				})
				return
      }
      const md5password = this.encryption(oldpassword)
      try {
        const user = await UserModel.findOne({loginName})
        if(!user) {
          res.send({
						status: 0,
						type: 'USER_NOT_FOUND',
						message: '未找到当前用户',
					})
        } else if(user.password.toString() !== md5password.toString()){
					res.send({
						status: 0,
						type: 'ERROR_PASSWORD',
						message: '密码不正确',
					})
        } else {
          user.password = this.encryption(newpassword)
          user.save()// 这里应该用flash提示修改成功后直接重定向到signout
          res.send({
						status: 1,
						success: '密码修改成功',
					})
        }
      } catch (err) {
        console.log('修改密码失败', err);
				res.send({
					status: 0,
					type: 'ERROR_CHANGE_PASSWORD',
					message: '修改密码失败',
				})
      }
    })

  }

  encryption (password) { // salt，取md5中的7位和原md5合并生成md5新密码，方法要记得
    return this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password))
  }

  Md5 (password) {
    const md5 = crypto.createHash('md5')
    return md5.update(password).digest('base64')
  }

}

export default new UserHandle()