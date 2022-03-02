# Element Stacking

* `z-index`

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
        position: absolute;
        top: 5px;
        left: 5px;
    }

    .box2 {
        background-color: green;
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .box3 {
        background-color: blue;
        position: absolute;
        top: 15px;
        left: 15px;
    }
```

<figure>
    <img src="../Assets\img\z-index.png" width="350">
    <figcaption>Empilhamento / Camadas</figcaption>
</figure>

    O ultimo elemento (azul) tem mais força, por isso fica em cima.

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
        position: absolute;
        top: 5px;
        left: 5px;
        z-index: 3;    /* <--- */
    }

    .box2 {
        background-color: green;
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 4;    /* <--- */
    }

    .box3 {
        background-color: blue;
        position: absolute;
        top: 15px;
        left: 15px;
        z-index: 5;    /* <--- */
    }
```

<figure>
    <img src="../Assets\img\z-index-3.png" width="350">
    <figcaption>z-index: 3;</figcaption>
</figure>

<br>

<figure>
    <img src="../Assets\img\z-index-4.png" width="350">
    <figcaption>z-index: 4;</figcaption>
</figure>

<br>

<figure>
    <img src="../Assets\img\z-index-5.png" width="350">
    <figcaption>z-index: 5;</figcaption>
</figure>

<br><hr><br>

