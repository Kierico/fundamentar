# `<Fieldset>` e `<legend>`.

## `<fieldset>`

- agrupamento de campos
- mesmo propósito
- semântico
- acessibilidade

<br>

### Atributos especiais:

- `disabled`
    - desabilita todos os elementos internos
    - não serão enviados ao submeter o formulário

<br>

- `form`
    - o id de um formulário ao qual esse fieldset pertence
    - não precisa estar dentro do formulário

<br>

- `name`
    - nome do grupo

<br>

## `<legend>`

- nome do agrupamento
- primeiro elemento dentro do fieldset

<br><br>

<form action="">
    <fieldset >
        <legend>Contato</legend>
        <label for="">Nome Completo<label>
        <input type="text">
    </fieldset>
</form>

```HTML
    <!-- HTML -->
    <form action="">
    <fieldset >
        <legend>Contato</legend>
        <label for="">Nome Completo<label>
        <input type="text">
    </fieldset>
</form>
```

<br><br>

Se o `<fieldset>` estiver fora do `<form>`, usamos o atriburo `form=""` no fieldset com o id do form.

<form action="">
    <fieldset >
        <legend>Contato</legend>
        <label for="">Nome Completo<label>
        <input type="text">
    </fieldset>
</form>

```HTML
    <!-- HTML -->
    <form id="contato" action="">
        ...
    </form>

    <fieldset form="contato">    <!-- ID do form -->
        <legend>Contato</legend>
        <label for="">Nome Completo<label>
        <input type="text">
    </fieldset>
```

<br><br>

Atributo `name=""`

```HTML
    <!-- HTML -->
    <form id="contato" action="">
        ...
    </form>

    <fieldset form="contato" name="inputs-contact">    <!-- name -->
        <legend>Contato</legend>
        <label for="">Nome Completo<label>
        <input type="text">
    </fieldset>
```

<br><hr><br>

