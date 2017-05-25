module.exports =
// 过滤所有直营店、过滤禁用、过滤封存组织
  `
  select FID, FNumber, FName_L2 AS FName, FParentID, FLevel, FIsPurchaseOrgUnit, FIsSaleOrgUnit, FIsStorageOrgUnit, FDisplayName_L2 AS FDisplayName from T_ORG_BaseUnit 
WHERE FControlUnitID = 'a06viCxSRPSu0pa/lIWabcznrtQ='
	AND FDisplayName_L2 NOT LIKE '%云南供销农资连锁总部%'
	AND FName_L2 NOT LIKE '%禁用%'
	AND FName_L2 NOT LIKE '%banned%'
	AND FIsOUSealUp = 0
ORDER BY FNumber
  `