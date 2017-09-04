
/*
OUTPUT:

D:\REST-SELENIUM\REST>node listBranches.js
[ { name: 'gh-pages',
    commit:
     { sha: '09f11de759f5728b08169952ed690e731d31eef9',
       url: 'https://github.ncsu.edu/api/v3/repos/ubhosle/data-challenge/commits/09f11de759f5728b08169952ed690e731d31eef9' } },
  { name: 'master',
    commit:
     { sha: '7334adfa3702fb7b1f997c9c6ff6536be85dc237',
       url: 'https://github.ncsu.edu/api/v3/repos/ubhosle/data-challenge/commits/7334adfa3702fb7b1f997c9c6ff6536be85dc237' } } ]
gh-pages
master

*/


var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + "30eff25b289a2607cb7f385ca74ae8f2bf803cb3";
var userId = "ubhosle";

var urlRoot = "https://github.ncsu.edu/api/v3";

var repo = "data-challenge";

listBranches(userId, repo);

function listBranches(owner,repo)
{
    var options = {
        url: urlRoot+'/repos/'+ userId + '/' + repo + "/branches",
        method: 'GET',
        headers: {
            //"User-Agent": "EnableIssues",
            //"content-type": "application/json",
            "Authorization": token
        }
    };
    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function (error, response, body) {
        var obj = JSON.parse(body);
        console.log(obj);
        for (var i = 0; i < obj.length; i++) {
            var name = obj[i].name;
            console.log(name);
        }
    });
    
}

