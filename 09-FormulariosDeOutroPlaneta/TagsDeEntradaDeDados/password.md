# Password

## `<input type="password">`

- Colocar uma senha de maneira segura
- Esconde o que está sendo digitado no campo
- O estilo da apresentação do campo, depende do User Agent

<br>

### Atributos

#### - `minlength` / `maxlength`

* O número mínimo e/ou máximo de caracteres para este campo.

<form action="">
    <input type="password" 
        minlength="4" 
        maxlength="8">
    <button type="submit">Login</button>
</form>

<br>

```HTML
    <!-- HTML -->
    <form action="">
        <input type="password" 
            minlength="4" 
            maxlength="8">
        <button type="submit">Login</button>
    </form>
```

<br>
<br>

#### - `size`

* O número aceitável de caracteres que esse campo deverá conter.

<br>

<form action="">
    <input type="password" 
        minlength="4" 
        maxlength="8" 
        size="8">
    <button type="submit">Login</button>
</form>

<br>

```HTML
    <!-- HTML -->
    <form action="">
        <input type="password" 
            minlength="4" 
            maxlength="8" 
            size="8">    <!-- size -->
        <button type="submit">Login</button>
    </form>
```

<br>
<br>

#### - `pattern`

* Expressão regular para validar o que está sendo digitado no campo.

* Altamente recomendado o uso de um padrão de segurança alta de senhas.

* exemplo: queremos que a senha contenha caracteres hexadecimais com o limite de no mínimo 4 e no máximo 8 caracteres.

    * pattern="[0-9a-fA-F]{4,8}"

<br>

<form>
    <input type="password" pattern="[0-9a-fA-F]{4,8}" title="Coloque HEX no mínimo 4 e no máximo 8 caracteres.">
    <button type="submit">Login</button>
<form>

<br>
    
```HTML
    <!-- HTML -->
    <form>
        <input type="password" pattern="[0-9a-fA-F]{4,8}" title="Coloque HEX no mínimo 4 e no máximo 8 caracteres.">
        <button type="submit">Login</button>
    <form>
```

<br>
<br>

#### - `placeholder`

* Mostra um exemplo de texto a ser digitado no campo.

<form action="">
    <input type="password" placeholder="Digite sua senha aqui.">
    <button type="submit">Login</button>
</form>

<br>

```HTML
    <!-- HTML -->
    <form action="">
        <input type="password" placeholder="Digite sua senha aqui.">
        <button type="submit">Login</button>
    </form>
```

<br>
<br>

#### - `readonly` / `disabled`

* Atributo booleano indicando se o campo está habilitado ou não.

<form action="">
    <input type="password" placeholder="Digite sua senha aqui." disabled>
    <button type="submit">Login</button>
</form>

<br>

```HTML
    <!-- HTML -->
    <form action="">
        <input type="password" placeholder="Digite sua senha aqui." disabled>
        <button type="submit">Login</button>
    </form>
```

<br>

<form action="">
    <input type="password" placeholder="Digite sua senha aqui." readonlyd>
    <button type="submit">Login</button>
</form>

<br>

```HTML
    <!-- HTML -->
    <form action="">
        <input type="password" placeholder="Digite sua senha aqui." readonly>
        <button type="submit">Login</button>
    </form>
```

<br>
<br>

#### - `required`

* O campo será obrigatório.

<form action="">
    <input type="password" required>
    <button type="submit">Login</button>
</form>

<br>

```HTML
    <!-- HTML -->
    <form action="">
        <input type="password" required>
        <button type="submit">Login</button>
    </form>
```

<br>
<br>

#### - `inputmode`

* Poderá alterar o uso do teclado em smartphones.

* exemplo: queremos que o cliente só adicione números.

    * inputmode="numeric"

<form action="">
    <input type="password" inputmode="numeric">
    <button type="submit">Login</button>
</form>

<br>

```HTML
    <!-- HTML -->
    <form action="">
        <input type="password" inputmode="numeric">
        <button type="submit">Login</button>
    </form>
```

<br>
<br>

#### - `autocomplete`

* on: permite a sugestão de: new-password ou current-password.

* off: desabilita a opção de autocompletar.

* new-passaword: o navegador poderá fugerir uma nova senha.

<form action="">
    <input type="password" autocomplete="on">
    <button type="submit">Login</button>
</form>

<br>

```HTML
    <!-- HTML -->
    <form action="">
        <input type="password" autocomplete="on">
        <button type="submit">Login</button>
    </form>
```

<br>
<hr>
<br>

