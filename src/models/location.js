const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Location = sequelize.define("Location", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Location.associate = (models) => {
    Location.hasMany(models.Car, {
      foreignKey: "locationId",
    });
  };

  return Location;
};
