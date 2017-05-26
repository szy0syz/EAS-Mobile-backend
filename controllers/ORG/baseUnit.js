'use strict'

import express from 'express';
import BaseController from '../baseController';

// 基本组织控制器

class BaseUnitHandle extends BaseController {
  constructor () {
    super()
    this.getAll = this.getAll.bind(this)
  }

  async getAll () {
    let json
    try {
      json = await this.baseQuery(req.queryConditions, 'baseUnit')
    } catch (err) {
        console.error(error)
        json = {
          status: 0,
          type: 'ERROR_DATA',
          message: '获取数据失败'
        }
        return
    }
    res.send(json)
  }
}

export default new BaseUnitHandle()