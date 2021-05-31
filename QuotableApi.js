const axios = require('axios');

const uri = "http://api.quotable.io/random"; //api endpoitn

module.exports = getData =() => {
  return axios.get(uri).then(response => response.data.content.split(" ")) // split single string into array of words for type racing
}
