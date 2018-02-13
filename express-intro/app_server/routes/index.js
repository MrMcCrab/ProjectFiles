var express = require('express');
var router = express.Router();

let ctrlMain = require('../controllers/ctrlMain');
let ctrlAddRecipe = require('../controllers/ctrlAddRecipe');
let ctrlSearchRecipes = require('../controllers/ctrlSearchRecipes');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/addRecipe', ctrlAddRecipe.add);
router.get('/searchRecipes', ctrlSearchRecipes.search);

module.exports = router;
