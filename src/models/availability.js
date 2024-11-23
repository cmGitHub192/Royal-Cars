const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Availability = sequelize.define("Availability", {
    availableDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  Availability.associate = (models) => {
    Availability.belongsTo(models.Car, {
      foreignKey: "carId",
      onDelete: "CASCADE",
    });
  };

  return Availability;
};
