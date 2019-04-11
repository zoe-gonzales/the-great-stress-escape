module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define("Image", {
    imageurl: {
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
  });
  return Image;
};

$(function () {
  var i = Image.imageurl;
  for (i=0; i < Math.floor(Math.random() * 21); i++){
      var curImg = i;
      var img = new Image();         
      $(img).load(function () {                                 
           $('#imageLoad').removeClass('loading')
                       .append($('<img src="'+this.curImg+'">').append(this));
       }).error(function () {})                            
  }
});



