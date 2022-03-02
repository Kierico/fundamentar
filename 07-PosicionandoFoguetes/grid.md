# Grid

`*` Posicionamento dos elementos dentro da caixa

`*` Posicionamento horizontal e vertical ao mesmo tempo

`*` Pode ser flexível ou fixo

`*` Cria espaços para os elementos filhos habitarem

<br>

~~~HTML
    <!-- HTML -->
    <header>Topo</header>
    <main>Conteúdo</main>
    <aside>Infos adicionais</aside>
    <footer>Rodapé</footer>
~~~

<br>

<figure>
    <img src="../Assets\img\grid-estrutura.png" width="350">
    <figcaption>Estrutura do Grid.</figcaption>
</figure>

<br><hr><br> <!-- ______________________________________ -->

```HTML
    <!-- HTML -->
    <body>                        <!-- pai -->
        <header>Topo</header>
        <main>Conteúdo</main>
        <aside>Infos adicionais</aside>
        <footer>Rodapé</footer>
    </body>
```

~~~CSS
    body {
        display: grid;              /* <--- */
        height: 100vh;              /* <--- */
        margin: 0;                  /* <--- */
    }

    header {
        background-color: green;    /* <--- */
    }

    main {
        background-color: red;      /* <--- */
    }

    aside {
        background-color: blue;     /* <--- */
    }

    footer {
        background-color: gray;    /* <--- */
    }
~~~

<br>

<figure>
    <img src="../Assets\img\grid.png" width="350">
    <figcaption></figcaption>
</figure>

<br><hr><br> <!-- ______________________________________ -->

~~~CSS
    body {
        display: grid;
        height: 100vh;
        margin: 0;
        grid-template-areas: "header header" "main aside" "footer footer";    /* <--- */
    }

    header {
        background-color: green;
        grid-area: header;    /* <--- */
    }

    main {
        background-color: red;
        grid-area: main;    /* <--- */
    }

    aside {
        background-color: blue;
        grid-area: aside;    /* <--- */
    }

    footer {
        background-color: gray;
        grid-area: footer;    /* <--- */
    }
~~~

<br>

<figure>
    <img src="../Assets\img\grid-area.png" width="350">
    <figcaption>grid-template-areas</figcaption>
</figure>

<br><hr><br> <!-- ______________________________________ -->

~~~CSS
    body {
        display: grid;
        height: 100vh;
        margin: 0;
        grid-template-areas: "header header" "main aside" "footer footer";
        grid-template-rows: 30px 1fr 40px;    /* <--- */
    }

    header {
        background-color: green;
        grid-area: header;
    }

    main {
        background-color: red;
        grid-area: main;
    }

    aside {
        background-color: blue;
        grid-area: aside;
    }

    footer {
        background-color: gray;
        grid-area: footer;
    }
~~~

<br>

<figure>
    <img src="../Assets\img\grid-rows.png" width="350">
    <figcaption>grid-template-rows, tem três linhas, então são três valores.</figcaption>
</figure>

<br><hr><br> <!-- ______________________________________ -->

~~~CSS
    body {
        display: grid;
        height: 100vh;
        margin: 0;
        grid-template-areas: "header header" "main aside" "footer footer";
        grid-template-rows: 30px 1fr 40px;
        grid-template-columns: 1fr 80px;    /* <--- */
    }

    header {
        background-color: green;
        grid-area: header;
    }

    main {
        background-color: red;
        grid-area: main;
    }

    aside {
        background-color: blue;
        grid-area: aside;
    }

    footer {
        background-color: gray;
        grid-area: footer;
    }
~~~

<br>

<figure>
    <img src="../Assets\img\grid-columns.png" width="350">
    <figcaption>grid-template-columns, tem duas colunas, então são dois valores.</figcaption>
</figure>

<br><hr><br> <!-- ______________________________________ -->

