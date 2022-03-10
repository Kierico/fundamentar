# Label

## `<label>`

- associar e identificar uma (ou mais) tag de entrada de dados
- acessibilidade
- você poderá clicar para mudar o foco da entrada de dados

<br>

### Atributos:

### - `for`
- para fazer a conexão entre label e a tag de entrada de dados
- é feita via id do input
- só funciona com elementos específicos
    - button, input (not hidden), meter, output, progress, select, textarea.

<br>

<label>
    Nome
    <input type="text">
</label>

```HTML
    <!-- HTML -->
    <label>
        Nome
        <input type="text">
    </label>
```

<br>

### `ou melhor`

<br>

<label for="nome">Nome</label>
<input id="nome" type="text">

```HTML
    <!-- HTML -->
    <label for="nome">Nome</label>
    <input id="nome" type="text">
```

<br><hr><br>

