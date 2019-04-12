module.exports = function(sequelize, DataTypes) {
  var Sounds = sequelize.define("Sounds", {
    playlisturl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    }
  },
  {
    timestamps: false
  }
  );
  return Sounds;
};