

const request = require("request");
const apiURL = require ("./apiURLs");

const search = function(req, res){
  // res.render('search');

  const path = "/api/recipe";
  const requestOptions = {
    url : apiURL.server + path,
    method : "GET",
    json : {},
    qs : {}
  };

  request(
    requestOptions,
    function (err, response, body) {
      if (err) {
        res.render("error", {message: err.message});
        console.log("error");
      }else if (response.statusCode !== 200) {
        res.render("error", {message: "Error accessing api: " + response.statusMessage + " (" + response.statusCode + ")"});
        console.log("Erro accessing api");
      }else if (!(body instanceof Array)) {
        res.render("error", {message: "Unexpected response data"});
        console.log("Unexpected data");
      }else if (!body.length) {
        res.render("error", {message: "No documents in colection"});
        console.log("body length");
      }else {
        res.render("search", {recipes: body});
        console.log("render " + body);
      }
    }
  )
};

module.exports = {
  search
};
