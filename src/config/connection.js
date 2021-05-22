var axios = require("axios").default;

var i = "rice";

var options = {
  method: "GET",
  url: "https://www.recipepuppy.com/api/",
  params: { i, q: "omelete", p: "3" },
};
axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
