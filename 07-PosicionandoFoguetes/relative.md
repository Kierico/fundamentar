# Relative

`-` Name: `position`

`-` Value: `relative`

<br>

* `top`, `right`, `bottom`, `left`, `z-index`.

<br>

```HTML
    <!-- HTML -->
    <div class="box1 box"></div>
    <div class="box2 box"></div>
    <div class="box2 box"></div>
```
```CSS
    /* CSS */
    .box {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    .box1 {
        background-color: red;
        position: relative;    /* <--- */
    }

    .box2 {
        background-color: green;
    }

    .box3 {
        background-color: blue;
    }
```

<img src="../Assets\img\um-embaixo-do-outro.png" width="350">

<br><hr><br>

```CSS
    /* CSS */
    .box {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    .box1 {
        background-color: red;
        position: relative;
        left: 100px;    /* <--- */
    }

    .box2 {
        background-color: green;
    }

    .box3 {
        background-color: blue;
    }
```

<img src="../Assets\img\relative-left.png" width="350">

<br><hr><br>

```CSS
    /* CSS */
    .box {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    .box1 {
        background-color: red;
        position: relative;
        left: 100px;
        top: 80px;    /* <--- */
    }

    .box2 {
        background-color: green;
    }

    .box3 {
        background-color: blue;
    }
```

<img src="../Assets\img\relative-top.png" width="350">

<br><hr><br>

