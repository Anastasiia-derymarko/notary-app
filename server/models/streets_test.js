/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('streets_test', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    Region: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Area: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PostIndex: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    Street: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'streets_test'
  });
};
