# Datalist

## `<datalist>`

- Lista de valores como sugestão a uma tag `<input>`.
- Valores sugestivos e não obrigatórios
- Usuário poderão selecionar um dos valores, ou colocar um valor diferente da sugentão.

```HTML
    <!-- HTML -->
    <datalist id="fruits-data">
        <option>apple</option>
        <option>banana</option>
        <option>mango</option>
        <option>orange</option>
        <option>cherry</option>
    </datalist>
```

### `list`
- Recebe como valor o ID de um `<datalist>` residente no mesmo documento.

<br>

### Tipos de input suportados
- text, search, url, tel, email, date, month, week, time, datatime-local, number, range e color.

<br>

    Valores de datalist que não são compatíveis com o tipo do `<inpu>` não serão apresentados.

<br>

### Tipos de input não suportados (conforme especificação)

- hidden, password, checkbos, radio, file, ou qualquer tipo de button.

<br>

### User Agent
Verificar a compatibilidade com o browser no site [caniuse](https://caniuse.com).

<br>
<br>

<!-- Fruits -->
<input type="text" list="fruits-data" placeholder="Escolha uma fruta">
<datalist id="fruits-data">
    <option>apple</option>
    <option>banana</option>
    <option>mango</option>
    <option>orange</option>
    <option>cherry</option>
</datalist>

<br>

```HTML
    <!-- HTML -->
    <input type="text" list="fruits-data" placeholder="Escolha uma fruta">
    <datalist id="fruits-data">
        <option>apple</option>
        <option>banana</option>
        <option>mango</option>
        <option>orange</option>
        <option>cherry</option>
    </datalist>
```

<br>
<br>

<!-- Colors -->
<input type="color" list="colors-data" placeholder="Escolha uma fruta">
<datalist id="colors-data">
    <option>#ff0000</option>
    <option>#00ff00</option>
    <option>#0000ff</option>
    <option>#000000</option>
    <option>#f0f0f0</option>
</datalist>

<br>

```HTML
    <!-- HTML -->
    <input type="color" list="colors-data" placeholder="Escolha uma fruta">
    <datalist id="colors-data">
        <option>#ff0000</option>
        <option>#00ff00</option>
        <option>#0000ff</option>
        <option>#000000</option>
        <option>#f0f0f0</option>
    </datalist>
```

<br>

<br><hr><br>

