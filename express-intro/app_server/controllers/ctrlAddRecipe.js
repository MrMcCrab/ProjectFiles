
const request = require('request');
const apiURL = require('./apiURLs');


const add = function(req, res){
  res.render('add');
};

const addData = function(req, res){
  const path = '/api/recipe';
  console.log("path " + path);


let ingredientArray = [];

let recipeObject = {name: req.body.ingredient, amount: req.body.amount};
ingredientArray.push(recipeObject);

for (var i = 1; i <= 2; i++) {
  let recipeObject = {name: req.body.ingredient1, amount: req.body.amount + i};
  ingredientArray.push(recipeObject);
}


  const postdata = {
    name: req.body.name,
    ingredients: ingredientArray
    // ingredients: {
    //   name: req.body.ingredient,
    //   amount: req.body.amount
    // }
  };

  const requestOptions = {
    url: apiURL.server + path,
    method: 'POST',
    json: postdata
  };

  request(
    requestOptions,
    function(err, response){
      if (response.statusCode === 201) {
        res.redirect('/');
      }else {
        res.render('error', {message: "Error adding data: " + response.statusMessage + ' (' + response.statusCode + ')'});
      }
    }
  );
};

module.exports = {
  add,
  addData
};
