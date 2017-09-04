var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var t = process.env.TOKEN;
var token = "token " + t;
var userId = "ubhosle";

var urlRoot = "https://github.ncsu.edu/api/v3";

var repo = "data-challenge";
var number = 5; 
listReactions(userId, repo, number );

function listReactions(owner, repo, number) {
    var options = {
        url: urlRoot + '/repos/' + owner + '/' + repo + '/issues/' + number + '/reactions',
        //url: urlRoot + '/repos/' + owner + '/' + repo + '/issues/' + number,
        method: 'GET',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token,
            "Accept": "application/vnd.github.squirrel-girl-preview"
        },
        json: {
            'content': "laugh",
        }
        
    };
    
    // Send a http request to url and specify a callback that will be called upon its return.
    request(options, function (error, response, body) {
        //var obj = JSON.parse(body);
        console.log(body);
        for (var i = 0; i < body.length; i++) {
            var name = body[i].name;
            console.log(name);
        }
    });
    
}

/*
OUTPUT:

D:\REST-SELENIUM\REST>node listReaction.js
[ { id: 985,
    user:
     { login: 'ubhosle',
       id: 7802,
       avatar_url: 'https://avatars.github.ncsu.edu/u/7802?',
       gravatar_id: '',
       url: 'https://github.ncsu.edu/api/v3/users/ubhosle',
       html_url: 'https://github.ncsu.edu/ubhosle',
       followers_url: 'https://github.ncsu.edu/api/v3/users/ubhosle/followers',
       following_url: 'https://github.ncsu.edu/api/v3/users/ubhosle/following{/other_user}',
       gists_url: 'https://github.ncsu.edu/api/v3/users/ubhosle/gists{/gist_id}',
       starred_url: 'https://github.ncsu.edu/api/v3/users/ubhosle/starred{/owner}{/repo}',
       subscriptions_url: 'https://github.ncsu.edu/api/v3/users/ubhosle/subscriptions',
       organizations_url: 'https://github.ncsu.edu/api/v3/users/ubhosle/orgs',
       repos_url: 'https://github.ncsu.edu/api/v3/users/ubhosle/repos',
       events_url: 'https://github.ncsu.edu/api/v3/users/ubhosle/events{/privacy}',
       received_events_url: 'https://github.ncsu.edu/api/v3/users/ubhosle/received_events',
       type: 'User',
       site_admin: false,
       ldap_dn: 'CN=ubhosle,OU=People,DC=wolftech,DC=ad,DC=ncsu,DC=edu' },
    content: 'laugh',
    created_at: '2017-09-04T16:50:18Z' } ]
undefined

*/