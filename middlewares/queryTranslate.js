'use strict'

import formidable from 'formidable'

//查询条件翻译：将req里的查询条件转换成sql的查询条件
class QueryTranslate {
  constructor() {

  }

  translate(req, res, next) {
    //if(req.method !== 'POST') next(); //测试，暂时不处理。
    const user = req.session.user

    // if (!user) {
    //   res.send({
    //     status: 0,
    //     type: 'Illegal Request',
    //     message: '非法操作'
    //   }) // 这里就不next，完成请求了
    // }

    if (req.url == '/saleIssue') {
      req.queryConditions = ` se.FStorageOrgUnitID IS NOT NULL AND sb.FControlUnitID = 'a06viCxSRPSu0pa/lIWabcznrtQ='  AND mgp.FMaterialGroupStandard != '非化肥' AND sb.FBaseStatus = 4  AND sb.FBizDate between N'2017-05-01' and N'2017-05-25' `
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
        if (err) {
          res.send({
            status: 0,
            type: 'FORM_DATA_ERROR',
            message: '表单信息错误'
          })
          return
        }
        const { queryConditions } = fields;
        if (queryConditions) req.queryConditions = queryConditions
      })
    }

    if (req.url == '/purInWarehs') {
      req.queryConditions = ` pe.FStorageOrgUnitID IS NOT NULL AND pb.FControlUnitID = 'a06viCxSRPSu0pa/lIWabcznrtQ='  AND mgp.FMaterialGroupStandard != '非化肥' AND pb.FBaseStatus = 4   AND pb.FCreateTime between N'2017-04-01' and N'2017-04-28' `;
      const form = new formidable.IncomingForm();
      form.parse(req, async (err, fields, files) => {
        if (err) {
          res.send({
            status: 0,
            type: 'FORM_DATA_ERROR',
            message: '表单信息错误'
          })
          return
        }
        const { queryConditions } = fields;
        if (queryConditions) req.queryConditions = queryConditions
      })
    }

    next();
  }
}

export default new QueryTranslate()