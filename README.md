# fontgen
An API which generates PNGs to showcase fonts

## Overview
This API is made to be used with an upcoming app. The API generates a static paragraph image or a code image based on the fonts and weights specified by the user.

## Setup
__If you wish to implement this API for yourself, do the following:__

* Create a folder named fonts in the root folder. Store the fonts as per the following format: _/fonts/{FontFamily}/{FontFamily}-{FontWeight}.ttf_
For eg: 
```
fonts
--- RobotoSlab
------ RobotoSlab-400.ttf
------ RobotoSlab-500.ttf
------ RobotoSlab-600.ttf
```

* In fontDB.js edit the JS array of object named db according to your fonts which contains details about the fonts in the _/fonts_ folder.
For eg: 
```js
const db = [
  {
    family : "RobotoSlab",
    type : "Slab Serif",
    weights : [100, 200, 300, 400, 500, 600, 700, 800, 900]
  },]
```
> The db array is mainly to make the API less complex for me. I plan to use MongoDB to store the font details

## Usage
### List all fonts
Get a list of all the fonts supported. Used for the _f1_, _f2_, _w1_ & _w2_ query parameter.
```shell
curl GET "https://fontgen-sb.herokuapp.com/list-fonts"
```

---

### List all themes
Get a list of all the syntax highlighting themes supported by highlight.js. Used for the _theme_ query parameter.

```shell
curl GET "https://fontgen-sb.herokuapp.com/list-themes"
```

---

### Generate paragraph
Generate a paragraph
```shell
curl GET "https://fontgen-sb.herokuapp.com/para?f1=Lora&w1=700&f2=Inter&w2=400&bg=ff5e79&fg=3c3980"
```

| Parameter | Description                                         |
|-----------|-----------------------------------------------------|
| f1        | Font Family used for the heading. Defaults to Arial |
| f2        | Font Family used for the content. Defaults to Arial |
| w1        | Font Weight of the heading. Defaults to 600,400     |
| w2        | Font Weight of the content. Defaults to 400         |
| bg        | Background HEX Color without the #                  |
| fg        | Foreground HEX Color without the #                  |

__If bg and fg are not provided then bg is transparent and fg is black__

<img src="https://github.com/ShreeyansB/fontgen/blob/main/ss1.png" width="600">

---

### Generate code
Generate a code block
```shell
curl GET "https://fontgen-sb.herokuapp.com/code?font=IBMPlexMono&theme=base16/material"
```

| Parameter | Description               |
|-----------|---------------------------|
| font      | Font Family of the code   |
| theme     | Syntax highlighting theme |

<img src="https://github.com/ShreeyansB/fontgen/blob/main/ss2.png" width="600">
