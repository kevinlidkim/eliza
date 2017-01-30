/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'userId'
    },
    personId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Person',
        key: 'personId'
      },
      field: 'personId'
    },
    accountCreateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'accountCreateDate'
    },
    adPreferences: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'adPreferences'
    },
    rating: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'rating'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'email'
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'salt'
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'hashedPassword'
    }
  }, 
  {
    timestamps: false,
    tableName: 'User'
  });
};
