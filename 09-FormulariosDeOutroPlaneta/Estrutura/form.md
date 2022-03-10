## `<Form>`

- Elemento que definirá um formulário
- É um container estilo <section> <footer>

<br>

### Atributos básicos

- `action` -- é para onde o formulário vai ser submetido.

    ```HTML
    <!-- HTML -->
    <form action="">
        ...
    </form>
    ```

    > Se deixar o 'action' vazio, ou não colocalo como atributo, o 'form' enviará os dados para a mesma página, e exibirá o dados no formulário.

<br>

- `method` -- POST ou GET.

    Para um campo de pesquisa, tudo bem usar um 'GET', porque não preciso esconder dados.

    ```HTML
        <!-- HTML -->
        <form action="" method="GET">
            https://kierico.github.io/?name=kierico&email=kiericograndao@gmail.com/

            <!-- method GET -->
            ...?name=kierico&email=kiericograndao@gmail.com/
        </form>
    ```

    >Se deixar o 'method' vazio, o padrão é GET.

    <br>
    <br>

    Para se 'criar' (cadastro de login) se usa o 'POST', envia os dasos escondidos.

    ```HTML
        <!-- HTML -->
        <form action="" method="POST">
            ...
        </form>
    ```

<br>

`Não se pode criar um 'form' dentro de outro 'form'.`

