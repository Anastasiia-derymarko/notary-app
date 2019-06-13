/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('area', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    region_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'area'
  });
};
