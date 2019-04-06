module.exports = function(sequelize, DataTypes) {
    var Quote = sequelize.define("Quote", {
      quote: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Quote;
  };