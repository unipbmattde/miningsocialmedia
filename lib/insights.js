var graph = require('fbgraph');

var conf= require('../conf');

graph.setAccessToken(conf.access_token);

exports.pageViewsTotal = function(){
    return function(req, res){
       graph.get(conf.page_id+"/insights/page_views_total", function(err, likes){
           if(err){
               console.log(err);
               res.send(err, 400);
           }
           else {
               res.render('index', { title: 'Mining Social Media', text: JSON.stringify(likes.data) });
               //res.send(likes.data);
           }
       });
    }
};


exports.insights = function(){
    return function(req, res){
        graph.get(conf.page_id+"/insights", function(err, likes){
            if(err){
                console.log(err);
                res.send(err, 400);
            }
            else {
                res.render('index', { title: 'Mining Social Media', text: JSON.stringify(likes.data) });
                //res.send(likes.data);
            }
        });
    }
};

exports.pageFansCountry = function(){
    return function(req, res){
        graph.get(conf.page_id+"/insights/page_fans_country/lifetime", function(err, likes){
            if(err){
                console.log(err);
                res.send(err, 400);
            }
            else {
                res.render('index', { title: 'Mining Social Media', text: JSON.stringify(likes.data) });
                //res.send(likes.data);
            }
        });
    }
};


