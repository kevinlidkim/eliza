/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Login', {
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
    loggedIn: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'loggedIn'
    },
    numberLogins: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'numberLogins'
    }
  }, 
  {
    timestamps: false,
    tableName: 'Login'
  });
};
