require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

const githubData = {
    "login": "princeshah03",
    "id": 198535114,
    "node_id": "U_kgDOC9Vnyg",
    "avatar_url": "https://avatars.githubusercontent.com/u/198535114?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/princeshah03",
    "html_url": "https://github.com/princeshah03",
    "followers_url": "https://api.github.com/users/princeshah03/followers",
    "following_url": "https://api.github.com/users/princeshah03/following{/other_user}",
    "gists_url": "https://api.github.com/users/princeshah03/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/princeshah03/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/princeshah03/subscriptions",
    "organizations_url": "https://api.github.com/users/princeshah03/orgs",
    "repos_url": "https://api.github.com/users/princeshah03/repos",
    "events_url": "https://api.github.com/users/princeshah03/events{/privacy}",
    "received_events_url": "https://api.github.com/users/princeshah03/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2025-02-10T05:53:21Z",
    "updated_at": "2026-06-29T12:14:24Z"
  }

app.get('/github', (req, res) =>{
    res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/prince', (req, res) => {
    res.send('<h1>hello world i am prince</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
