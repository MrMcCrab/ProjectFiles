
const mongoose = require('mongoose');

const recipeModel = mongoose.model('recipe');

const recipeList = function (req, res) {
  res
    .status(200)
    .json({'name' : 'name'});
};

const addRecipe = function (req, res){
  res.status(201).json("Add recipe");
};

module.exports = {
  recipeList,
  addRecipe
}
