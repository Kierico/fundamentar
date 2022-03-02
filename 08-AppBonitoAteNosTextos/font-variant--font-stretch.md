# Atribuindo mais estilos às fontes

## Font-variant

* Faz variações na apresentação da fonte

<br>

~~~CSS
    /* CSS */
    p {
        font-family: 'Lato', sans-serif;
        font-weight: normal;
        font-variant: small-caps;    /* <--- */
    }
~~~

<br>

<figure>
    <img src="../Assets\imgensDaAula08\font-variant.png" alt="">
    <figcaption style="text-align: center;">font-variant: small-caps;</figcaption>
</figure>

<br><hr><br>

## Font-stretch

* Alargamento ou encolhimento da fonte
* Aceita palavra-chave como: expanded, condensed, normal
* Aceita porcentagens de 50% a 200%
* Essa propriedade não vai funcionar em todas as fontes

<br>

~~~CSS
    /* CSS */
    p {
        font-stretch: expanded;    /* <---- */
    }
~~~

<br>

<figure>
    <img src="../Assets\imgensDaAula08\font-stretch.png" alt="">
    <figcaption style="text-align: center;"><a href="https://interactive-examples.mdn.mozilla.net/pages/css/font-stretch.html">CSS Demo: font-stretch</a></figcaption>
</figure>

<br>

    Nem todas as fontes aceitam Stretch.

<br>

### Syntax
~~~CSS
    /* Keyword values */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* Percentage values */
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* Global values */
font-stretch: inherit;
font-stretch: initial;
font-stretch: revert;
font-stretch: unset;
~~~

<br><hr><br>

### Referências
* https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
* https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
* [Fundamental text and font styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)

<br><hr><br>

