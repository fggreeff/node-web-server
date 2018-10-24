const express = require('express')

var app = express()
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  //   res.send('<h1>hallo express!</h1>')
  res.send({
    name: 'heyy',
    likes: ['cats', 'fish']
  })
})

app.get('/about', (req, res) => {
  res.send('about page')
})

app.get('/bad', (req, res) => {
  res.send({ errorMessage: 'unable to handle request' })
})
app.listen(4000, () => {
  console.log('server is up on port 4000')
})
