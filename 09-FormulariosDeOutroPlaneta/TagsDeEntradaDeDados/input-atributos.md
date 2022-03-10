# Input atributos

## `<input>` Atributos comuns

### - `type`
### - `autocomplete`
### - `autofocus`
### - `disabled`
### - `readonly` (quase todos)
### - `value`
### - `form` (quase todos)
### - `name`
### - `required` (quase todos)
### - `placeholder` (quase todos) (password, search, tel, text, url)

<br>
<br>

### `type`

<input type="text">

```HTML
    <!-- HTML -->
    <input type="text">
```
<br>

### `autocomplete`

Te ajudará a preencher os campos. Ex: email

<input type="email" autocomplete="email">

```HTML
    <!-- HTML -->
    <input type="email" autocomplete="email">    <!-- exemplo: email -->
```
<br>

### `autofocus`

Atributo booleano (true or false).

<input type="text" autofocus>

```HTML
    <!-- HTML -->
    <input type="text" autofocus>
```
>Só um por página.

<br>

### `disabled`

Atributo que desabilita o elemento.

<input type="text" disabled value="disabled">

```HTML
    <!-- HTML -->
    <input type="text" disabled>
```

<br>

### `readonly`

Atributo que semelhante ao `disabled`. Só não fica escurinho.

<input type="text" readonly value="readonly">

```HTML
    <!-- HTML -->
    <input type="text" readonly>
```

<br>

### `value`

<input type="text" value="Exemplo de valor">

```HTML
    <!-- HTML -->
    <input type="text" value="Exemplo de valor">
```

<br>

### `form`

Vai lincar o input ao `<form>` (formulário)

<form action="" id="my-form">
<input type="text" form="my-form">

```HTML
    <!-- HTML -->
    <form action="" id="my-form">    <!-- id -->
    <input type="text" form="my-form">    <!-- form -->
```

<br>

### `name`

<input type="email" name="email">

```HTML
    <!-- HTML -->
    <input type="email" name="email">    <!-- name -->
```

    Sem o atributo `name` se terá problemas futuro em resgatar os dados do input.

> O atributo `name` vai receber um nome de acordo com o tipo do campo.

<br>

### `required`

Atributo booleano. Obriga a preencer o campo.

<input type="email" required value="*" style="color: red;">

```HTML
    <!-- HTML -->
    <input type="email" required>    <!-- required -->
```

<br>

### `placeholder`

Rotulo do campo (elemento).

<input type="email" placeholder="email@email.com">

```HTML
    <!-- HTML -->
    <input type="email" placeholder="email@email.com">
```

>Não se troca o `<label>` pelo placeholder. Pois dificutará a acessibilidade (ler a tela).

<br>

<br><hr><br>

>&Kfr;&ifr;&efr;&rfr;&ifr;&cfr;&ofr;

