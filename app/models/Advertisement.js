/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Advertisement', {
    advertisementId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'advertisementId'
    },
    adType: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'adType'
    },
    company: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'company'
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'itemName'
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'content'
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'unitPrice'
    },
    availableUnits: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'availableUnits'
    }
  }, 
  {
    timestamps: false,
    tableName: 'Advertisement'
  });
};
