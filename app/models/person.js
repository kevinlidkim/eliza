/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Person', {
    personId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'personId'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'lastName'
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'firstName'
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'address'
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'city'
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      field: 'state'
    },
    zipCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'zipCode'
    },
    telephone: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'telephone'
    }
  }, 
  {
    timestamps: false,
    tableName: 'Person'
  });
};
