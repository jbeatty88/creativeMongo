var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express' });
});

router.get('/app', function(req, res, next) {
  res.render('app.ejs', { title: 'Express' });
});

module.exports = router;
