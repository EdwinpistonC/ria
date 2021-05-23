var axios = require("axios").default;

var AuthorizationVar = "5bd79d3a420b3a880e1688b0272906af2c8f86a3";

var ingredientsVar = "",
  compositionVar = "energy,carbohydrate,protein,total_fat";

var options = {
  method: "GET",
  url: "https://www.bon-api.com/api/v1/recipe/profiles/",
  params: {
    Authorization: AuthorizationVar,
    ingredients: ingredientsVar,
    composition: compositionVar,
    language: "es",
  },
};
axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
