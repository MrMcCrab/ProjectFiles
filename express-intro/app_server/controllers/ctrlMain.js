
const index = function(req, res){
  res.render('index', {title: 'Recipe database'});
};

module.exports = {
  index
};
