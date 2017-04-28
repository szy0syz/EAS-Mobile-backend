module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PurInEntry', {
		////////entry
		FID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		FQty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
        FBaseQty: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		FPrice: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
        FAmount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
        FUnitActualCost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
        FActualCost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		FPurOrderNumber: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FPurOrderID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FTax: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		FActualCost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		FActualCost: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		FTaxPrice: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		FTaxAmount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		////////////
		////bill
		FDescription: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FAuditTime: { //审核时间
			type: DataTypes.DATE,
			allowNull: true
		},
		FYear: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
        FPeriod: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		FMonth: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
        FDay: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		FBizDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		FNumber: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FBaseStatus: {  //单据状态
			type: DataTypes.INTEGER,
			allowNull: true
		},
		FCreateTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		FSupplier: {
			type: DataTypes.STRING,
			allowNull: true
		},
		/////////////////////////////
        ////////////MaterialGroup////
        FMaterialNumber: {
			type: DataTypes.STRING,
			allowNull: true
		},
        FMaterial: {
			type: DataTypes.STRING,
			allowNull: true
		},
        FMaterialModel: {
			type: DataTypes.STRING,
			allowNull: true
		},
        FMaterialDisplayName: {
			type: DataTypes.STRING,
			allowNull: true
		},
        FMaterialType0: {
			type: DataTypes.STRING,
			allowNull: true
		},
        FMaterialType1: {
			type: DataTypes.STRING,
			allowNull: true
		},
        FMaterialType2: {
			type: DataTypes.STRING,
			allowNull: true
		},
        FMaterialType3: {
			type: DataTypes.STRING,
			allowNull: true
		},
		///////addtional///////////
        FBrandFertilizer: {
			type: DataTypes.STRING,
			allowNull: true
		},
        FBrandCarbaMind: {
			type: DataTypes.STRING,
			allowNull: true
		},
        FFertGroupID: {
			type: DataTypes.BIGINT,
			allowNull: true
		}
    });
}