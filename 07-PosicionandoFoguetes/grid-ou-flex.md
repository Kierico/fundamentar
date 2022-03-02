>Podemos sim usar grid e flex juntos, 
>
>só não no mesmo "elemento", 
>
>se aplicarmos o 'flex' no elemento que possui o 'grid', vai se perder tudo.

<br>

Exemplo:
~~~CSS
    /* CSS */
    body {
        display: grid;    /* se acrescentar o flex, perde toda a configuração do grid */
    }

    header {
        display: flex;    /* a configuração do grid não se aplica */
    }
~~~

    Só usar em elementos (body, header...) diferentes, como no exemplo acima.

