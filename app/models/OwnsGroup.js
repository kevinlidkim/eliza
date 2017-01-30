/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OwnsGroup', {
    ownerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'userId'
      },
      field: 'ownerId'
    },
    groupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Group',
        key: 'groupId'
      },
      field: 'groupId'
    }
  }, 
  {
    timestamps: false,
    tableName: 'OwnsGroup'
  });
};
