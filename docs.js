const htmlDoc = function (config) {
  let doc = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    `+ getFontCSS(config.fontHead) + getFontCSS(config.fontSub) + `
    #box {
      width: 750px;
      background-color: `+ getBg(config) + `;
      padding: 35px 40px 40px 40px;
    }
    
    .head {
      font-size: 80px;
      font-weight: ${config.fontHead.weight};
      font-family: "${config.fontHead.family}";
      color: `+ getFg(config) + ';' + `
    }
    
    .sub-div {
      padding-left: 4px;
      padding-right: 40px;
    }
    
    .sub {
      font-size: 32px;
      font-weight: ${config.fontSub.weight};
      font-family: "${config.fontSub.family}";
      color: `+ getFg(config) + ';' + `
    }
    
    button {
      padding: 10px 30px 12px 25px;
      font-size: 25px;
      font-weight: 400;
      border: none;
      background: none;
      outline: none;
      color: `+ getFg(config) + ';' + `
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
  if (font.family === -1) {
    return ''
  } else {
    return `@font-face {
    font-family: '${font.family}';
    font-style: normal;
    font-weight: ${font.weight};
    src: url(${font.fontUrl}) format('woff2');
  }`}
}

const codeDoc = function (config) {
  let doc = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/highlight.min.js"
    integrity="sha512-W7EehcwtSbRF63FIQlXEOOd5mnq0Et0V0nUOvwcUvjnCKgOLLYbqriQxEQSp63sfrkryxIg/A/O8v8O18QwQCQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/languages/dart.min.js"
    integrity="sha512-e9tfYUYcegl48CppMz12MOgLQ+d4IsiQyJstDdhsSlQ0ey3P/X3aq7+hzw/dCf++O3ZPB6RZy5Yjv3NoQdBAtg=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/`+ config.theme + `.min.css" />
  <script>hljs.highlightAll();</script>
  <title>Document</title>
  <style>
    `+ getFontCSS(config.font) + `
    body {
      width: fit-content;
    }
    pre>code {
      font-size: 30px;
      font-family:`+ config.font.family + ` ,monospace;
    }
    pre code.hljs {
      padding: 52px 52px 52px 37px ;
    }
    .code {
      width: fit-content;
    }
  </style>
</head>

<body>
  <div class="code">
    <pre><code>class Frog {
  int id;
  String name;
        
  void wednesday() => print("It is Wednesday my dudes.");
        
  Frog(this.id, this.name);

}

void main() {
    Frog frog = Frog(21, 'Flopper');
    frog.wednesday();
}</code></pre>
  </div>
</body>
</html>
  `
  return doc
}

function getFg(config) {
  if (!config.colors) {
    return '#000000'
  } else {
    return config.colors.fg
  }
}

function getBg(config) {
  if (!config.colors) {
    return 'transparent'
  } else {
    return config.colors.bg
  }
}

module.exports.htmlDoc = htmlDoc
module.exports.codeDoc = codeDoc