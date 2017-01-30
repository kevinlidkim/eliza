/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Message', {
    messageId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'messageId'
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'subject'
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'content'
    }
  }, 
  {
    timestamps: false,
    tableName: 'Message'
  });
};
