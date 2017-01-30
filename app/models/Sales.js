/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sales', {
    transactionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'transactionId'
    },
    dateTimeSold: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'dateTimeSold'
    },
    advertisementId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Advertisement',
        key: 'advertisementId'
      },
      field: 'advertisementId'
    },
    numberOfUnits: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'numberOfUnits'
    },
    accountNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'PurchaseAccount',
        key: 'accountNumber'
      },
      field: 'accountNumber'
    }
  }, 
  {
    timestamps: false,
    tableName: 'sales'
  });
};
