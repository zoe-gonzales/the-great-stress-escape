//readme for iquotes: https://github.com/banminkyoz/iquotes
const iquotes = require('iquotes');

iquotes.random();

//Get random quote for a category
//Categories: life, love, dev (development), and all
iquotes.random('life');


//function from npm test file
//https://github.com/banminkyoz/iquotes/blob/master/test.js
function lifeQuotes(data, category) {
  const result = data.filter(d => d.category === category);
  return result ? result.length === data.length : true;
}

//----> returns error: data.filter is not a function

lifeQuotes('get random', t => {
  t.truthy(iquotes.random('life'));
});

lifeQuotes();

module.exports = Search;


