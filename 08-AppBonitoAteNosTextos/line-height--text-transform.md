# Line-height e Text-transform

## line-height

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

<br>

~~~CSS
    /* CSS */
    p {
        line-height: 2.5;    /* <---- */
    }
~~~

<br>

<figure>
    <img src="../Assets\imgensDaAula08\line-height.png" alt="">
    <figcaption style="text-align: center;">Espaçamento entre linhas.</figcaption>
</figure>

<br>

<figure>
    <img src="../Assets\imgensDaAula08\line-height--demo.png" alt="">
    <figcaption style="text-align: center;"><a href="https://interactive-examples.mdn.mozilla.net/pages/css/line-height.html">CSS Demo: line-height.</a></figcaption>
</figure>

<br>

<br><hr><br>

## text-transform

* Transformação do texto
* Valores poder ser: `none` | `capitalize` | `uppercase` | `lowercase` | `full-width` | `full-size-kana`

<br>

~~~CSS
    /* CSS */
    p {
        text-transform: uppercase;    /* <---- */
    }
~~~

<br>

<figure>
    <img src="../Assets\imgensDaAula08\text-transform.png" alt="">
    <figcaption style="text-align: center;">Todas os caracteres em maiúsculas.</figcaption>
</figure>

<br>

### Syntax
~~~CSS
    /* Keyword values */
    text-transform: none;
    text-transform: capitalize;
    text-transform: uppercase;
    text-transform: lowercase;
    text-transform: full-width;
    text-transform: full-size-kana;

    /* Global values */
    text-transform: inherit;
    text-transform: initial;
    text-transform: revert;
    text-transform: unset;
~~~

<br>

<br><hr><br>

### Referência
* [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
* [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

<br><hr><br>

