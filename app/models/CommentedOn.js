/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CommentedOn', {
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
    },
    dateTimePosted: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'dateTimePosted'
    }
  }, 
  {
    timestamps: false,
    tableName: 'CommentedOn'
  });
};
