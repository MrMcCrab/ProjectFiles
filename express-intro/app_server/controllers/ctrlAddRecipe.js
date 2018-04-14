
const request = require('request');
const apiURL = require('./apiURLs');

const add = function(req, res){
  res.render('add');
};

const addData = function(req, res){
  const path = '/api/recipe';
  console.log("path " + path);

  // var obj = [];
  // var data = {};
  // for (var i = 0; i < elements.length; i++) {
  //    data = {
  //      userId: elements[i].id 
  //    };
  //    obj.push(data);
  // }

  // let ingredientArray = [];
  // let i = 0;
  // for(i = 0; i < req.body.ingredient.length; i++){
  //   ingredientArray.push(req.body.ingredient[i]);
  // }
  // array = JSON.stringify(ingredientArray);

  const postdata = {
    name: req.body.name,
    // ingredients: req.body.ingredient
    ingredients: {
      name: req.body.ingredient,
      amount: req.body.amount
    }
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
