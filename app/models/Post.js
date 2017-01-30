/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Post', {
    postId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'postId'
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'content'
    },
    commentCount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'commentCount'
    },
    likes: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'likes'
    }
  }, 
  {
    timestamps: false,
    tableName: 'Post'
  });
};
