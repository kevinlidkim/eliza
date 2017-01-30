/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Page', {
    pageId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'pageId'
    },
    postCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'postCount'
    }
  }, 
  {
    timestamps: false,
    tableName: 'Page'
  });
};
