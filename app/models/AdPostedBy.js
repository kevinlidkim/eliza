/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdPostedBy', {
    advertisement: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Advertisement',
        key: 'advertisementId'
      },
      field: 'advertisement'
    },
    employee: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Employee',
        key: 'employeeId'
      },
      field: 'employee'
    },
    dateTimePosted: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'dateTimePosted'
    }
  }, 
  {
    timestamps: false,
    tableName: 'AdPostedBy'
  });
};
