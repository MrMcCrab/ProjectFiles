
const express = require('express');
const router = express.Router();

const ctrlApiRecipe = require('../controllers/ctrlApiRecipe');

router
  .route('/recipe')
  .get(ctrlApiRecipe.recipeList)
  .post(ctrlApiRecipe.addRecipe);

module.exports = router;
