/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OwnsPage', {
    pageId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Page',
        key: 'pageId'
      },
      field: 'pageId'
    },
    owner: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'User',
        key: 'userId'
      },
      field: 'owner'
    },
    group: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Group',
        key: 'groupId'
      },
      field: 'group'
    }
  }, 
  {
    timestamps: false,
    tableName: 'OwnsPage'
  });
};
