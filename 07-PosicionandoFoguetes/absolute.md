# Absolute

`-` Name: `position`

`-` Value: `absolute`

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
        position: absolute;    /* <--- */
        left: 100px;
        top: 80px;
    }

    .box2 {
        background-color: green;
    }

    .box3 {
        background-color: blue;
    }
```

<figure>
    <img src="../Assets\img\absolute-left-top.png" width="350">
    <figcaption>position: absolute; Sai do fluxo normal. Referente a página toda.</figcaption>
</figure>

<br>

<figure>
    <img src="../Assets\img\absolute-camadas.png" width="350">
    <figcaption>O box1(vermelho) fica a frente, fazendo um novo contexto.</figcaption>
</figure>

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
        left: 100px;
        top: 0px;    /* <--- */
    }

    .box2 {
        background-color: green;
    }

    .box3 {
        background-color: blue;
    }
```

<figure>
    <img src="../Assets\img\absolute-top.png" width="350">
    <figcaption>position: absolute; left: 100px; top: 0px;</figcaption>
</figure>

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
        left: 0px;    /* <--- */
        top: 0px;
    }

    .box2 {
        background-color: green;
    }

    .box3 {
        background-color: blue;
    }
```

<figure>
    <img src="../Assets\img\absolute-left.png" width="350">
    <figcaption>position: absolute; left: 0px; top: 0px;</figcaption>
</figure>

<br><hr><br>

```HTML
    <!-- HTML -->
    <main>    <!-- <--- -->
        <div class="box1 box"></div>
        <div class="box2 box"></div>
        <div class="box2 box"></div>
    </main>
```

```CSS
    /* CSS */
    .box {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    main {
        margin-top: 200px;    /* empurra os filhos para baixo */
    }

    .box1 {
        background-color: red;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .box2 {
        background-color: green;
    }

    .box3 {
        background-color: blue;
    }
```

<figure>
    <img src="../Assets\img\absolute--margin-top.png" width="350">
    <figcaption>'margin-top' empurra os filhos para baixo.</figcaption>
</figure>

    Só não empurra o elemento box1 (vermelho), porque ele está com 'position: absolute;'

<br><hr><br>

```CSS
    /* CSS */
    .box {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    main {
        margin-top: 100px;
        position: relative;    /* <--- */
    }

    .box1 {
        background-color: red;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .box2 {
        background-color: green;
    }

    .box3 {
        background-color: blue;
    }
```

<figure>
    <img src="../Assets\img\main--position-relative.png" width="350">
    <figcaption>O vermelho está 'absoluto' ao pai (main) dele.</figcaption>
</figure>

    O vermelho está em cima do verde, pois ele esta 'absoluto' ao pai (main).

<br><hr><br>

```HTML
    <!-- HTML -->
    <div class="box1 box"></div>    <!-- <--- -->
    <main>
        <div class="box2 box"></div>
        <div class="box2 box"></div>
    </main>
```

```CSS
    /* CSS */
    .box {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    main {
        margin-top: 100px;
        position: relative;
    }

    .box1 {
        background-color: red;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .box2 {
        background-color: green;
    }

    .box3 {
        background-color: blue;
    }
```

<figure>
    <img src="../Assets\img\position-absolute-pagina.png" width="350">
    <figcaption>O vermelho está 'absoluto' a página.</figcaption>
</figure>

<br><hr><br>

