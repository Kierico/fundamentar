# Web Fonts

* fontes do sistema x fontes da web
* como usar fontes para web?

    * `@font-face`
    * `@import`
    * `link` - fica no HTML

<br>

## @font-face

~~~CSS
    /* CSS */
    @font-face {    /* <--- */
        ...
    }
~~~

<br>

<figure>
    <img src="../Assets\imgensDaAula08\@font-face.png" alt="">
    <figcaption style="text-align: center;">@font-face - O Google já faz todo esse serviço para a gente.</figcaption>
</figure>

<br><hr><br>

## link

```HTML
    <!-- HTML -->
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">    <!-- <---- -->
    </head>
```
~~~CSS
    /* CSS */
    p {
        font-family: 'Lato', sans-serif;
    }
~~~
    
<br>



<br><hr><br>

### Referências
* https://www.w3.org/TR/css-fonts-3/
* https://css-tricks.com/snippets/css/using-font-face/
* [Font Google](https://fonts.google.com/)

<br><hr><br>

