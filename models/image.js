module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define("Image", {
    imageurl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Image;
};