const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('GET /');
  res.send('Hello World! node vxx.xx.x By https://github.com/wachira90');
});

app.get('/api', (req, res) => {
  console.log('GET /');
  res.send('Hello World! API');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
