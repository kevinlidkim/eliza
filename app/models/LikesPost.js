/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LikesPost', {
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
    user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'userId'
      },
      field: 'user'
    }
  }, 
  {
    timestamps: false,
    tableName: 'LikesPost'
  });
};
