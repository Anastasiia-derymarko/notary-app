/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('main_parameters_agreement', {
    id_agreement: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'main_parameters_agreement'
  });
};
