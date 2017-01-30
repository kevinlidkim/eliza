/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MemberOfGroup', {
    user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'userId'
      },
      field: 'user'
    },
    group: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Group',
        key: 'groupId'
      },
      field: 'group'
    }
  }, 
  {
    timestamps: false,
    tableName: 'MemberOfGroup'
  });
};
