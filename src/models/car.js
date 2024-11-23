const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Car = sequelize.define("Car", {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pricePerDay: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  Car.associate = (models) => {
    Car.belongsTo(models.Location, {
      foreignKey: "locationId",
      onDelete: "CASCADE",
    });
    Car.hasMany(models.Availability, {
      foreignKey: "carId",
    });
    Car.hasMany(models.Reservation, {
      foreignKey: "carId",
    });
  };

  return Car;
};
