# Flex

`*` Nos permite posicionar os elementos dentro da caixa.

`*` Controle em uma dimensão (horizontal ou vertical)

`*` Alinhamento, direcionamento, ordernar e tamanhos

```CSS
    div.parent {    /* pai */
        display: flex;
    }
```

<br>

## flex-direction

`*` Qual a direção do `flex`: horizontal ou vertival

`*` row `|` column

<br>

## alinhamento

`*` justify-content

`*` align-items

<br>


```HTML
    <!-- HTML -->
    <div class="container">
        <div class="box blue"></div>
        <div class="box red"></div>
        <div class="box green"></div>
    </div>
```

```CSS
    /* CSS */
    .box {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    .blue {
        background-color: blue;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }
```

<figure>
    <img src="../Assets\img\block.png" width="350">
    <figcaption>Padrão vertical.</figcaption>
</figure>

<br><hr><br>

```CSS
    /* CSS */
    .container {
        display: flex;    /* <--- */
    }

    .box {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    .blue {
        background-color: blue;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }
```

<figure>
    <img src="../Assets\img\flex.png" width="350">
    <figcaption>O flex por padrão é em row.</figcaption>
</figure>

<br><hr><br>

```CSS
    /* CSS */
    .container {
        display: flex;
        flex-direction: column;    /* <--- */
    }

    .box {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    .blue {
        background-color: blue;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }
```

<figure>
    <img src="../Assets\img\block.png" width="350">
    <figcaption>Padrão vertical.</figcaption>
</figure>

    Padrão vertical é o 'block'.

<br><hr><br>

```CSS
    /* CSS */
    .container {
        display: flex;
        justify-content: space-between;    /* <--- */
    }

    .box {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    .blue {
        background-color: blue;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }
```

<figure>
    <img src="../Assets\img\flex--justify-content.png" width="350">
    <figcaption>display: flex; justify-content: space-between;</figcaption>
</figure>

<br><hr><br>

```CSS
    /* CSS */
    body {                      /* <--- */
        height: 100vh;          /* <--- */
        margin: 0;              /* <--- */
        display: flex;          /* <--- */
        align-items: center;    /* <--- */
    }

    .container {
        display: flex;
        justify-content: space-between;
        width: 100vw;           /* <--- */
    }

    .box {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    .blue {
        background-color: blue;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }
```

<figure>
    <img src="../Assets\img\flex--align-items.png" width="350">
    <figcaption></figcaption>
</figure>

<br><hr><br>

