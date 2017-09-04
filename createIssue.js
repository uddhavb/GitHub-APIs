/* 
OUTPUT: 

D:\REST-SELENIUM\REST>node createIssue.js
{ url: 'https://github.ncsu.edu/api/v3/repos/ubhosle/data-challenge/issues/5',
  repository_url: 'https://github.ncsu.edu/api/v3/repos/ubhosle/data-challenge',
  labels_url: 'https://github.ncsu.edu/api/v3/repos/ubhosle/data-challenge/issues/5/labels{/name}',
  comments_url: 'https://github.ncsu.edu/api/v3/repos/ubhosle/data-challenge/issues/5/comments',
  events_url: 'https://github.ncsu.edu/api/v3/repos/ubhosle/data-challenge/issues/5/events',
  html_url: 'https://github.ncsu.edu/ubhosle/data-challenge/issues/5',
  id: 30617,
  number: 5,
  title: 'TESTING...',
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
  labels: [],
  state: 'open',
  locked: false,
  assignee:
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
  assignees:
   [ { login: 'ubhosle',
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
       ldap_dn: 'CN=ubhosle,OU=People,DC=wolftech,DC=ad,DC=ncsu,DC=edu' } ],
  milestone: null,
  comments: 0,
  created_at: '2017-09-04T16:46:48Z',
  updated_at: '2017-09-04T16:46:48Z',
  closed_at: null,
  body: 'TESING THE create issue function.',
  closed_by: null }



*/

var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


var token = "token " + "30eff25b289a2607cb7f385ca74ae8f2bf803cb3";
var userId = "ubhosle";

var urlRoot = "https://github.ncsu.edu/api/v3";

var repo = "data-challenge";

createIssue(userId, repo);

function createIssue(owner, repo) {
    var options = {
        url: urlRoot + '/repos/' + owner + '/' + repo + '/issues',
        method: 'POST',
        headers: {
            "User-Agent": "EnableIssues",
            "content-type": "application/json",
            "Authorization": token
        },
        json: {
            "title": "TESTING...",
            "body": "TESING THE create issue function.",
            "assignee": userId
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

