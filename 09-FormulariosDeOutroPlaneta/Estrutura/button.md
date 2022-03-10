# Button

## `<button>`

- Apresenta um botão
- Usado para enviar formulários
- É estilizado pelo user agent (navegador).

<br>

### Atributos comuns:

- `type`
    - submit
    - reset
    - button

<br>

- `autofocus`
- `disabled`
- `name`
- `value`
- `form`

<br>
<br>

### `type`:
#### - `submit` - enviar formulário

<br>

<button type="submit">Enviar</button>

```HTML
    <!-- HTML -->
    <button type="submit">Enviar</button>    <!-- enviar formulário -->
```

<br>

#### - `reset` - limpa formulário

<br>
<form>
    <input type="text" value="">
    <button type="reset">Limpar</button>
</form>

```HTML
    <!-- HTML -->
    <form>
        <input type="text" value="">
        <button type="reset">Limpar</button>    <!-- limpar formulário -->
    </form>
```

<br>

### `autofocus`
    Ao entrar na página o elemento já vai estar selecionado.

<button autofocus>Botão</button>

```HTML
    <!-- HTML -->
    <button autofocus>Botão</button>
```

<br>

### `disabled`
    Desabilita o elemento.

<button disabled>Botão</button>

```HTML
    <!-- HTML -->
    <button disabled>Botão</button>
```

<br>

### `name` e `value`

Ao enviar, o `value` vai estar com seus dados dentro do `name`.

<button name="botao" value="valor exemplo" type="submit">Enviar</button>

```HTML
    <!-- HTML -->
    <button name="botao" value="valor exemplo" type="submit">Enviar</button>
```

>Ao usar o atributo `nome` no button, se quiser pode usar o `value` também.

<br>

### `form`

Vai lincar a um formulário pelo ID.

<button form="" type="submit">Enviar</button>

```HTML
    <!-- HTML -->
    <form action="" id="meu-form"><form>
    <button form="meu-form" type="submit">Enviar</button>
```

<br>

botão com `input`

<input type="submit" form="" value="Enviar">

```HTML
    <!-- HTML -->
    <form action="" id="meu-form"><form>
    <input form="meu-form" type="submit" value="Enviar">
```

<br>

