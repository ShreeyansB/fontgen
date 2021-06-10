const path = require('path')
const express = require('express')
const nodeHtmlToImage = require('node-html-to-image')
const myHtml = require('./docs.js')

const app = express()
const port = process.env.PORT || 3000

const publicDirPath = path.join(__dirname, '/html')

app.use(express.static(publicDirPath))

app.get('', (req, res) => {
  res.send({error: 'emrror'})
})

app.get('/gen', async (req, res) => {
  if (!req.query.img) {
    res.send({ error: 'img not provided' })
  } else {
    const image = await nodeHtmlToImage({html: myHtml.htmlDoc, transparent: true})
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(image, 'binary');
  }
})


app.listen(port, () => {
  console.log('Server is up on port ' + port + '.');
})