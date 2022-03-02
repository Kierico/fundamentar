# Fixed

`-` Name: `position`

`-` Value: `fixed`

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
        position: fixed;
    }

    .box2 {
        background-color: green;
    }

    .box3 {
        background-color: blue;
    }
```

<figure>
    <img src="../Assets\img\fixed.png" width="350">
    <figcaption>O vermelho sai para um novo contexto, fixo.</figcaption>
</figure>

    O vermelho fica fixo e só os elementos atrás se movimentam (rolam).

<br><hr><br>

