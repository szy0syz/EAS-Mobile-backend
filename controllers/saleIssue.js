'use strict';

import express from 'express';
import BaseController from './baseController';

class SaleIssueHandle extends BaseController {
  constructor () {
    super();
    this.query = this.query.bind(this);
  }

  async query(req, res, next) {
    let metadata;
    try {
      //metadata = await this.baseQuery(sql, req.queryConditions, 'saleIssue');
      metadata = await this.baseQuery('', 'saleIssue');
    } catch (error) {
        console.error(error);
        metadata = '报错';
        throw new Error(error);
    }
    res.send(metadata);
  }
}

export default new SaleIssueHandle()