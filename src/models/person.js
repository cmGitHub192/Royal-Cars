const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Person = sequelize.define("Person", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Person.associate = (models) => {
    Person.hasMany(models.Reservation, {
      foreignKey: "customerId",
    });
  };

  return Person;
};
