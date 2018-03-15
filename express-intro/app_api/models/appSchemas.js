
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  ingredients: [
    {
      name: String,
      amount: Number,
    }
  ]
});

mongoose.model("recipe", recipeSchema, "recipes");
