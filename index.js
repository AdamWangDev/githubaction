const express = require('express')
const app = express()
const port = 3001
const foldersRouter = require('./src/routes/sysfile')


app.get('/', (req, res) => {
  res.send('Hi World!')
})

app.use('/', foldersRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})