const mongoose = require('mongoose');

const dbURI = 'mongodb://recipeuser:hOXr74oVf1EZ@ds251988.mlab.com:51988/recipe_database';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
  console.log('Mongoose connected');
})
mongoose.connection.on('error', function(err){
  console.log('mongoose connection error: ', err);
});
mongoose.connection.on('disconnected', function() {
  console.log('mongoose disconnected');
});

require('./appSchemas');
