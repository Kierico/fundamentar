# Background
## background-color
```CSS
    element {
        background-color: #fff;
        background-color: rgb(55, 100, 50);
    }
```

<br>
<br>

## background-image-repeat
```CSS
    element {
        background-image: url(https://source.unsplash.com/random);
        background-repeat: no-repeat;    /* a imagem não se repete. */

        background-repeat: repeat-x;    /* a imagem se repete na horizontal. */
        background-repeat: repeat-y;    /* a imagem se repete na vertical. */
    }
```
`*` Por padrão no `background-image` a imagem se repete.

<br>
<br>

## background-position
```CSS
    element {
        background-position: right;    /* aplica para o horizontal e vertical. */
        background-position: right center;    /* o primeiro valor aplica para o horizontal e o segundo valor para o vertical. */
    }
```

<br>
<br>

## background-size
```CSS
    element {
        background-size: contain;    /* se encaixa no elemento */
        background-size: cover;    /* se estica para oculpar todo o elemento */
        background-size: 50%;    /* um valor, se aplica na horizontal (largura). A altura fica automatico. */
        background-size: 50% 50%;    /* dois valores, o segundo se aplica na vertical (altura). */
    }
```

<br>
<br>

## background-origin-clip
```CSS
    element {
        /* origem da imagem */
        background-origin: border-box;    /* começa da apartir da borda do elemento */
        background-origin: content-box;    /* é o padrão */
        background-origin: padding-box;    /* começa do padding, semelhante ao 'content-box' */

        /* clip */
        background-clip: border-box;    /* é o padrão */
        background-clip: content-box;    /* começa do padding */
        background-clip: padding-box;    /* começa do padding, mas eliminando o fundo, o fundo da borda */
    }
```

<br>
<br>

## background-attachment
```CSS
    element {
        background-attachment: scroll;    /* é o padrão */
        background-attachment: fixed;    /* o fundo fica fixo, e o texto desliza por cima. */
    }
```

<br>
<br>

## Shorthand
```CSS
    element {
        /* shorthand */
        background: rgb(55, 100, 50) url(https://source.unsplash.com/random) no-repeat right top / 50px border-box content-box fixed;

        background-color: rgb(55, 100, 50);
        background-image: url(https://source.unsplash.com/random);
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 50px;    /* no 'size' tem que colocar a '/' */
        background-origin: border-box;    /*  */
        background-clip: content-box;    /*  */
        background-attachment: fixed;    /*  */
    }
```

<br>
<br>

## Gradient
```CSS
    element {
        background: linear-gradient(45deg, red, yellow);
        background: radial-gradient(red, yellow, green);    /* padrão são duas cores, mas pode adicionar mais cores */
        background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2));    /* pode se usar 'rgba' */
    }
```

<br>
<br>

## Multiplos valores
```CSS
    element {
        background: linear-gradient(45deg, red, yellow), rgb(55, 100, 50) url(https://source.unsplash.com/random) no-repeat right top / 50px border-box content-box fixed;    /* separe os 'backgrounds' por ',' */
    }
```
