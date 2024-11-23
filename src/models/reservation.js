const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Reservation = sequelize.define("Reservation", {
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  Reservation.associate = (models) => {
    Reservation.belongsTo(models.Person, {
      foreignKey: "customerId",
      onDelete: "CASCADE",
    });
    Reservation.belongsTo(models.Car, {
      foreignKey: "carId",
      onDelete: "CASCADE",
    });
  };

  return Reservation;
};
