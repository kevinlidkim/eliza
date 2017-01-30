/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PostedOn', {
    post: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Post',
        key: 'postId'
      },
      field: 'post'
    },
    page: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Page',
        key: 'pageId'
      },
      field: 'page'
    },
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
    dateTimePosted: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'dateTimePosted'
    }
  }, 
  {
    timestamps: false,
    tableName: 'PostedOn'
  });
};
