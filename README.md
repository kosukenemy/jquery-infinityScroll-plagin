
# infinityScroll.js
- JQuery Infinity Scroll plagin

### Demo Page
https://kosukenemy.github.io/jquery-infinityScroll-plagin/

### How it works
This plugin is a JQuery plugin that enables infinite scrolling.
Download `infinityScroll.css` and `infinityScroll.min.js` in the `dist directory` of this repository and load them into your HTML file.

- ja
このプラグインは無限スクロールを実現するJQueryプラグインです。
このリポジトリの`distディレクトリ`にある`infinityScroll.css`と`infinityScroll.min.js`をダウンロードして、HTMLファイルに読み込んでください。

```HTML
<!-- read <head> infinityScroll.css -->
<link rel="stylesheet" href="dist/infinityScroll.css">
<!-- read <body> infinityScroll.min.js -->
<script src="dist/infinityScroll.min.js"></script>
```


### Infinity Scroll Init / Set Up

After loading `infinityScroll.min.js` into an HTML file,
set up the `<script>` tag with the following code.
Display a message after loading all content.

- ja
`infinityScroll.min.js`をHTMLファイルに読み込んだ後に、
`<script>`タグに以下のようなコードでセットアップをおこないます。
Ajaxで読み込むHTMLはload.htmlに記述します。

- config

```JavaScript
const config = {
        type : "html", 
        data : "load.html", // infinite scrolling Contents HTML
        loadListClass : "is-load-list", // infinite scrolling Contents HTML ClassList
        renderInit : 2, //　initial value　:2　　 It works even if not write.　 List to display first
        scrollEndMessage : "read all contents!", // It works even if not write. Display a message after loading all content.
    }

// infinite scrolling Contents Show ParentNode
$('#element').infinityScroll(config)
```

- load.html
````HTML

<!-- config.data  -->
<div class="is-load-list"> <!-- config.loadListClass's ClassList -->
    <img src="smaple/images/a5cJ6tTI8uQ.jpg" alt="">
</div>
<div class="is-load-list">
    <img src="smaple/images/BKxFj0ogp2M.jpg" alt="">
</div>
<div class="is-load-list">
    <img src="smaple/images/FU3vZToCZQ4.jpg" alt="">
</div>
````

#### complate 

Data treated as infinite scroll is read and displayed by Ajax under the HTML tag specified in `config`.

- ja
無限スクロールとして扱うデータは`config`で指定したHTMLタグの下にAjaxで読み込まれて表示されます.


```HTML
<head>

    <!-- read infinityScroll.css -->
    <link rel="stylesheet" href="dist/infinityScroll.css">
</head>
<body>
    <div id="element">
        <!-- render load.html -->
    </div>

    <!-- read JQuery -->
    <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous">
    </script>
    <!-- infinityScroll.min.js -->
    <script src="dist/infinityScroll.min.js"></script>
    <script>
        const config = {
                type : "html",
                data : "load.html",
                loadListClass : "is-load-list",
                renderInit : 2,
                scrollEndMessage : "read all contents!",
            }
        $('#element').infinityScroll(config)
    </script>
</body>
```

### license
MIT License


