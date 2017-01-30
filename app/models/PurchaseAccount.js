

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PurchaseAccount', {
    accountNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    creditCard: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'PurchaseAccount'
  });
};
