module.exports = 
`SELECT top 100
            pe.FID AS FID, pe.FQty AS FQty, pe.FBaseQty AS FBaseQty, pe.FPrice AS FPrice, pe.FAmount AS FAmount,
            pe.FTaxPrice AS FTaxPrice, pe.FTaxAmount AS FTaxAmount, 
            pe.FUnitActualCost AS FUnitActualCost, pe.FActualCost AS FActualCost, pe.FPurOrderNumber AS FPurOrderNumber, pe.FPurOrderID AS FPurOrderID, pe.FTax AS FTax, 
            pb.FDescription AS FDescription, pb.FAuditTime AS FAuditTime, pb.FYear AS FYear, pb.FMonth AS FMonth, pb.FPeriod AS FPeriod,
            pb.FBizDate AS FBizDate, pb.FNumber AS FNumber, pb.FBaseStatus AS FBaseStatus, pb.FCreateTime, pb.FAuditTime,
            s.FName_L2 AS FSupplier,
            mg.FName_l2 AS FMaterial, mg.FNumber AS FMaterialNumber, mg.FModel AS FMaterialModel, mg.FDisplayName_L2 as FMaterialDisplayName,
            mg.type0 as FMaterialType0, mg.type1 as FMaterialType1, mg.type2 as FMaterialType2, mg.type3 as FMaterialType3,
            mgp.FMaterialGroupStandard AS FBrandFertilizer, mgp.FFertGroupID as FFertGroupID, mgp1.FMaterialGroupStandard AS FBrandCarbaMind 
      FROM T_IM_PurInWarehsEntry AS pe 
      LEFT JOIN T_IM_PurInWarehsBill as pb ON pb.FID = pe.FParentID 
      LEFT JOIN T_BD_Supplier as s on pb.FSupplierID = s.FID 
      LEFT JOIN 
            (
                  SELECT m.FID ,m. FNumber, m.FName_l2, m.FModel ,mg.FDisplayName_L2
                  ,dbo.Get_StrArrayStrOfIndex(mg.FDisplayName_L2,'_',1) AS 'type0'
                  ,dbo.Get_StrArrayStrOfIndex(mg.FDisplayName_L2,'_',2) AS 'type1'
                  ,dbo.Get_StrArrayStrOfIndex(mg.FDisplayName_L2,'_',3) AS 'type2'
                  ,dbo.Get_StrArrayStrOfIndex(mg.FDisplayName_L2,'_',4) AS 'type3'
                  FROM dbo.T_BD_Material AS m 
                  LEFT JOIN dbo.T_BD_MaterialGroup AS mg ON mg.FID = m.FMaterialGroupID 
            )     as mg on pe.FMaterialID = mg.FID 
      LEFT JOIN 
                  (
                        SELECT m.FID AS FMaterialID ,m. FNumber AS FNumber, m.FName_l2 AS FName, m.FModel AS FModel , mgs. FName_L2, mg.FName_L2 AS FMaterialGroupStandard , mg.FNumber AS FFertGroupID  
                        FROM dbo.T_BD_MaterialGroupDetial AS mgd 
                        INNER JOIN dbo.T_BD_Material AS m ON mgd.FMaterialID = m.FID 
                        INNER JOIN dbo.T_BD_MaterialGroup AS mg ON mgd.FMaterialGroupID = mg.FID 
                        INNER JOIN dbo.T_BD_MaterialGroupStandard AS mgs ON mgd.FMaterialGroupStandardID = mgs.FID 
                        WHERE mgs.FID = 'zKoH04SnSGaaBPGx4Fnth5eb4R8='
                  ) AS mgp ON mgp.FMaterialID = pe.FMaterialID 
      LEFT JOIN   
                  (
                        SELECT m.FID AS FMaterialID ,m. FNumber AS FNumber, m.FName_l2 AS FName, m.FModel AS FModel , mgs. FName_L2, mg.FName_L2 AS FMaterialGroupStandard 
                        FROM dbo.T_BD_MaterialGroupDetial AS mgd 
                        INNER JOIN dbo.T_BD_Material AS m ON mgd.FMaterialID = m.FID 
                        INNER JOIN dbo.T_BD_MaterialGroup AS mg ON mgd.FMaterialGroupID = mg.FID 
                        INNER JOIN dbo.T_BD_MaterialGroupStandard AS mgs ON mgd.FMaterialGroupStandardID = mgs.FID 
                        WHERE mgs.FID = 'rxeYrJ6RSpquKqs0T4Jhs5eb4R8='
                  ) AS mgp1 ON mgp1.FMaterialID = pe.FMaterialID 
      WHERE `