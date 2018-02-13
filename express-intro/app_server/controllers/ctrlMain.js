
const index = function(req, res){
  res.render('index', {title: 'recipe database'});
};

module.exports = {
  index
};
