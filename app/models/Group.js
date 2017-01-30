/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Group', {
    groupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'groupId'
    },
    groupName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'groupName'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'type'
    }
  }, 
  {
    timestamps: false,
    tableName: 'Group'
  });
};
