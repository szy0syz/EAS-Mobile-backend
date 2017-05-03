'use strict';

import express from 'express';
import BaseController from './baseController';
import sql from '../db/sql/purInWarehs';

class PurInWarehsHandle extends BaseController {
  constructor () {
    super();
    this.query = this.query.bind(this);
  }

  async query(req, res, next) {
    let tt;
    try {
      tt = await this.baseQuery(sql, req.queryConditions, 'PurInWarehs');
    } catch (error) {
        //promise的异常，手工加入日志。
        console.error(error);
        tt = '报错';
        throw new Error(error);
    }
    res.send(tt);
  }
}

export default new PurInWarehsHandle()