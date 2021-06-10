const htmlDoc = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>#box {
    width: 700px;
    background-color: transparent;
    padding: 35px 40px 40px 40px;
  }
  
  .head {
    font-size: 80px;
    font-weight: 600;
  }
  
  .sub-div {
    padding-left: 4px;
  }
  
  .sub {
    font-size: 32px;
    font-weight: 400;
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
  }
  </style>
</head>
<body>
  <div id="box">
    <span class="head">Nice Headline Here</span><br><br>
    <div class="sub-div">
      <span class="sub">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.</span>
    </div>
    <br><br>
    <button>❤ &nbsp;&nbsp;Button</button>
  </div>
</body>

</html>
`

module.exports.htmlDoc = htmlDoc