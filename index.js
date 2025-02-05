require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const data = {
    "login": "Zed69696969",
    "id": 146553796,
    "node_id": "U_kgDOCLw7xA",
    "avatar_url": "https://avatars.githubusercontent.com/u/146553796?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Zed69696969",
    "html_url": "https://github.com/Zed69696969",
    "followers_url": "https://api.github.com/users/Zed69696969/followers",
    "following_url": "https://api.github.com/users/Zed69696969/following{/other_user}",
    "gists_url": "https://api.github.com/users/Zed69696969/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Zed69696969/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Zed69696969/subscriptions",
    "organizations_url": "https://api.github.com/users/Zed69696969/orgs",
    "repos_url": "https://api.github.com/users/Zed69696969/repos",
    "events_url": "https://api.github.com/users/Zed69696969/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Zed69696969/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "zed",
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
    "created_at": "2023-09-30T13:43:33Z",
    "updated_at": "2025-01-24T05:59:51Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube',(req,res) => {
    res.redirect('https://www.youtube.com/watch?v=pOV4EjUtl70&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&index=2')
})
app.get('/twitter',(req,res) => {
    res.send('asdf')
})
app.get('/git',(req, res) => {
    res.json(data)
})
app.get('/login', (req,res) => {
    res.send('<h1>this is a logni test</h1>')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})