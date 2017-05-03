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
    let metadata;
    try {
      metadata = await this.baseQuery(req.queryConditions, 'PurInWarehs');
    } catch (error) {
        //promise的异常，手工加入日志。
        console.error(error);
        metadata = '报错';
        throw new Error(error);
    }
    res.send(metadata);
  }
}

export default new PurInWarehsHandle()