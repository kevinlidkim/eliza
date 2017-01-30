/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OwnsPurchaseAccount', {
    owner: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'userId'
      }
    },
    accountNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PurchaseAccount',
        key: 'accountNumber'
      }
    }
  }, {
    tableName: 'OwnsPurchaseAccount'
  });
};
