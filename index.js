require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube',(req,res) => {
    res.redirect('https://www.youtube.com/watch?v=pOV4EjUtl70&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&index=2')
})
app.get('/twitter',(req,res) => {
    res.send('asdf')
})
app.get('/login', (req,res) => {
    res.send('<h1>this is a logni test</h1>')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})