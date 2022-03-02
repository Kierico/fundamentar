# Posicionamentos

Controlar onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

`-` Name: `position`

`-` Value: `static` | `relative` | `absolute` | `fixed`

<br>

>O fluxo normal dos elementos é um embaixo do outro.

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

