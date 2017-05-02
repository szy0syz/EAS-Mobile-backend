'use strict'

//查询条件翻译：将req里的查询条件转换成sql的查询条件
class QueryTranslate {
  constructor() {
  
  }

  translate(req, res, next) {
    //过滤采购入库单
    req.queryConditions = `pe.FStorageOrgUnitID IS NOT NULL AND pb.FControlUnitID = 'a06viCxSRPSu0pa/lIWabcznrtQ='  AND mgp.FMaterialGroupStandard != '非化肥' AND pb.FBaseStatus = 4   AND pb.FCreateTime between N'2017-04-21' and N'2017-04-28'`;
    next();
  }
}

export default new QueryTranslate()