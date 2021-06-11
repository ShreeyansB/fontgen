const path = require('path')
const express = require('express')
const nodeHtmlToImage = require('node-html-to-image')
const myHtml = require('./docs.js')
const font2b64 = require('node-font2base64')
const fontDB = require('./fontDB')

const app = express()
const port = process.env.PORT || 3000

const publicDirPath = path.join(__dirname, '/html')

app.use(express.static(publicDirPath))

app.get('', (req, res) => {
  res.send({ error: 'emrror' })
})

app.get('/gen', async (req, res) => {
  if (!req.query.img) {
    res.send({ error: 'img not provided' })
  } else {
    console.log('Starting...')
    if (req.query.img !== 'para') {
      res.send({ error: 'img type invalid' })
      return
    }
    if (!req.query.f1) {
      req.query.f1 = 'Arial'
    }
    if (!req.query.f2) {
      req.query.f2 = 'Arial'
    }
    if (!(checkFont(req.query.f1) && checkFont(req.query.f2))) {
      res.send({ error: 'Invalid fontface' })
      return
    }
    else {
      console.log('Checks passed.')
      const font1 = getFont(req.query.f1)
      const font2 = getFont(req.query.f2)
      const weight1 = getWeight1(font1, req.query.w1)
      const weight2 = getWeight2(font2, req.query.w2)
      var font1Url = ''
      var font2Url = ''
      if (font1.family === 'Arial') {
        font1Url = 'undefined'
      } else {
        font1Url = font2b64.encodeToDataUrlSync('./fonts/' + font1.family + '/' + font1.family + '-' + weight1 + '.ttf')
      }
      if (font2.family === 'Arial') {
        font2Url = 'undefined'
      } else {
        font2Url = font2b64.encodeToDataUrlSync('./fonts/' + font2.family + '/' + font2.family + '-' + weight2 + '.ttf')
      }

      const config = {
        fontHead: {
          family: font1.family,
          fontUrl: font1Url,
          weight: weight1
        },
        fontSub: {
          family: font2.family,
          fontUrl: font2Url,
          weight: weight2
        }
      }
      const image = await nodeHtmlToImage({ html: myHtml.htmlDoc(config), transparent: true })
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.end(image, 'binary');
    }
  }

})


app.listen(port, () => {
  console.log('Server is up on port ' + port + '.');
})


function checkFont(font) {
  if (font === 'Arial') {
    return true
  }
  var i = fontDB.db.every(f => {
    if (f.family === font) {
      return true
    }
  })
  if (i) {
    return i
  }
  return false
}

function getFont(font) {
  if (font === "Arial") {
    return {
      family: "Arial",
      type: "Sans Serif",
      weights: [400]
    }
  }
  var i
  fontDB.db.every(f => {
    if (f.family === font) {
      i = f
    }
  })
  return i
}


function getWeight1(font, weight) {
  weight = parseInt(weight)
  if (font === "Arial") {
    return 400
  }
  if (!weight) {
    if (font.weights.includes(600)) {
      return 600
    } else if (font.weights.includes(400)) {
      return 400
    } else {
      return font.weights[0]
    }
  }

  if (font.weights.includes(weight)) {
    return weight
  } else if (font.weights.includes(600)) {
    return 600
  } else if (font.weights.includes(400)) {
    return 400
  } else {
    return font.weights[0]
  }
}

function getWeight2(font, weight) {
  weight = parseInt(weight)
  if (font === "Arial") {
    return 400
  }
  if (!weight) {
    if (font.weights.includes(400)) {
      return 400
    } else {
      return font.weights[0]
    }
  }

  if (font.weights.includes(weight)) {
    return weight
  } else if (font.weights.includes(400)) {
    return 400
  } else {
    return font.weights[0]
  }
}

