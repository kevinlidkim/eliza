/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SentMessage', {
    message: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'message'
    },
    sender: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'userId'
      },
      field: 'sender'
    },
    receiver: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'userId'
      },
      field: 'receiver'
    },
    dateTimeSent: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'dateTimeSent'
    }
  }, 
  {
    timestamps: false,
    tableName: 'SentMessage'
  });
};
