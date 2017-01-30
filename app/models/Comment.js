/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comment', {
    commentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'commentId'
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'content'
    },
    likes: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'likes'
    }
  }, 
  {
    timestamps: false,
    tableName: 'Comment'
  });
};
