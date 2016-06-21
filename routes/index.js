var express = require('express');
var insights = require('../lib/insights');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mining Social Media', text: 'app geht die lutzi' });
});

router.get('/totalPageViews', insights.pageViewsTotal());
router.get('/insights', insights.insights());
router.get('/pageFansCountry', insights.pageFansCountry());

router.get("/worldmap.ejs",function(req,res){
    res.render('worldmap');
});

module.exports = router;
