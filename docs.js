const htmlDoc = function getPara(config) {
  var doc = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    `+ getFontCSS(config.fontHead) + getFontCSS(config.fontSub) +`
    #box {
      width: 750px;
      background-color: transparent;
      padding: 35px 40px 40px 40px;
    }
    
    .head {
      font-size: 80px;
      font-weight: ${config.fontHead.weight};
      font-family: "${config.fontHead.family}";
    }
    
    .sub-div {
      padding-left: 4px;
      padding-right: 40px;
    }
    
    .sub {
      font-size: 32px;
      font-weight: ${config.fontSub.weight};
      font-family: "${config.fontSub.family}";
    }
    
    button {
      padding: 10px 30px 12px 25px;
      font-size: 25px;
      font-weight: 400;
      border: none;
      background: none;
      outline: none;
      color: black;
      border: 2px solid;
      border-radius:45px;
      font-family: "${config.fontSub.family}";
    }
    </style>
  </head>
  <body>
    <div id="box">
      <span class="head">Heart Surgeon</span><br><br>
      <div class="sub-div">
        <span class="sub">Number one. Steady hand. One day, Kim Jong Un need new heart. I do operation. But mistake! Kim Jong Un die! SSD very mad! I hide fishing boat, come to America. No English, no food, no money. Darryl give me job. Now I have house, American car and new woman. Darryl save life.
        My big secret. I kill Kim Jong Un on purpose. I good surgeon. The best!</span>
      </div>
      <br><br>
      <button>❤ &nbsp;&nbsp;Button</button>
    </div>
  </body>
  
  </html>
  `
  // console.log(doc)
  return doc
}

function getFontCSS(font) {
  return `@font-face {
    font-family: '${font.family}';
    font-style: normal;
    font-weight: ${font.weight};
    src: url(${font.fontUrl}) format('woff2');
  }`
}


module.exports.htmlDoc = htmlDoc