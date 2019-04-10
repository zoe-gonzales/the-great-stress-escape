module.exports = function(sequelize, DataTypes) {
  var Quote = sequelize.define("Quote", {
    quote: {
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
  return Quote;
}; 

//readme for iquotes: https://github.com/banminkyoz/iquotes
const iquotes = require('iquotes');

iquotes.random();

//Get random quote for a category
//Categories: life, love, dev (development), and all
iquotes.random('life');

console.log(iquotes.random());

// module.exports = Search;
