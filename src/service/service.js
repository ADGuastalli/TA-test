const { axios } = require("axios");

const getAllData = async () => {
  const response = await axios.get(
    "https://ajoaquinlizarraga.github.io/apipublic/mydata/people/people.json"
  );
  const data = await response.json();
  return data;
};

module.exports = { getAllData };
