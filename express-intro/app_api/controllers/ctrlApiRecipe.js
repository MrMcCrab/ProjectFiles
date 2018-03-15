
const mongoose = require('mongoose');

const recipeModel = mongoose.model('recipe');

const recipeList = function (req, res) {

  recipeModel.find({}, function(err, recipes){
    if (err) {
      res.status(404).json(err);
    }
    else {
      res.status(200).json(recipes);
    }
  });
};

const addRecipe = function (req, res){
  recipeModel.create(req.body, function(err, newRecipe){
    if (err) {
      res.status(400);
    }
    else {
      res.status(201).json(newRecipe);
    }
  });
};

module.exports = {
  recipeList,
  addRecipe
};
