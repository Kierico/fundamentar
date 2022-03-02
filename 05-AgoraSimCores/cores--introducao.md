# Cores

Usamos CSS para alterar cores do nosso `documento`.

## Tipos

* background-color ( para caixas )
* color ( para textos )
* border-color ( para caixas )
* outros...

## Valores

 Podemos definir os valores por

 * palavra-chave ( blue, transparent )
 * hexadecimal ( #990011 )
 * funções: rgb, rgba, hsl, hsla

<br>
<br>

# Keyword named values

```CSS
    element {
        /* Keyword values */
        color: currentcolor;

        /* <name-color> values */
        color: red;
        color: orange;
        color: tan;
        color: rebeccapurple;
    }
```

<br>
<br>

# Hexadecimal

```CSS
    element {
        /* <hex-color> values 0-F */
        color: #090;    /* RED GREEN BLUE */
        color: #009900;
        color: #090a;
        color: #009900aa;
    }
```

`*` A com 4 valores, é a transparência 'a' ou 'aa'.

<br>
<br>

# RGB

```CSS
    element {
        /* <rgb()> values */
        color: rgb(34, 12, 64, 0.6);    /* 0-255 */
        color: rgba(34, 12, 64, 0.6);
        color: rgb(34 12 64 / 0.6);
        color: rgba(34 12 64 / 0.3);
        color: rgb(34.0 12 64 / 60%);
        color: rgb(34.6 12 64 / 30%);
    }
```

<br>
<br>

# HSL

```CSS
    element {
        /* <hsl()> values */
        color: hsl(30, 100%, 50%, 0.6);    /* Hue - Saturation - Lumiance */
        color: hsla(30, 100%, 50%, 0.6);
        color: hsl(30 100% 50% / 0.6);
        color: hsla(30 100% 50% / 0.6);
        color: hsl(30.0 100% 50% / 60%);
        color: hsla(30.2 100% 50% / 60%);
    }
```
* **Hue** - ângulo da cor.
* **Saturation** - saturação da cor.
* **lumiance** - semelhante ao contraste (varia do claro para o escuro).
* opacity - opacidade (transparência) da cor.

<br>
<br>

# Valores globais

```CSS
    /* Global values */
    element {
        color: inherit;    /* herança  -  de um elemento anterior. */
        color: initial;    /* volta para a cor inicial (reseta a cor) */
        color: currentcolor;     /* cor atual */
        color: unset;    /* não difine cor. Pega a cor do contexto. */
    }
```

<br>
<br>

https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
