/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address', {
    id: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    region: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    street: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type_building: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    number_building: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type_obj: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    number_obj: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'address'
  });
};
