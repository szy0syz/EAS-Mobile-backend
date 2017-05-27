module.exports = function(sequelize, DataTypes) {
	return sequelize.define('SaleIssueEntry', {
      FID: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
    FNumber: {
			type: DataTypes.STRING,
			allowNull: true
		},
    FName: {
			type: DataTypes.STRING,
			allowNull: true
		},
    FParentID: {
			type: DataTypes.STRING,
			allowNull: true
		},
    FParentID: {
			type: DataTypes.STRING,
			allowNull: true
		},
    FLevel: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
    FIsPurchaseOrgUnit: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
    FIsSaleOrgUnit: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
    FIsStorageOrgUnit: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
    FDisplayName: {
			type: DataTypes.STRING,
			allowNull: true
		}
  });
}