const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  console.log('GET /');
  res.send('Hello World! node vxx.xx.x By https://github.com/wachira90');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
