/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LikesComment', {
    comment: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Comment',
        key: 'commentId'
      },
      field: 'comment'
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
    tableName: 'likescomment'
  });
};
