/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employee', {
    employeeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'employeeId'
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
    ssn: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'ssn'
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'startDate'
    },
    hourlyRate: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'hourlyRate'
    }
  }, 
  {
    timestamps: false,
    tableName: 'Employee'
  });
};
