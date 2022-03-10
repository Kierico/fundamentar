# Color

## `<input type="color">`
* Interface para selecionar cor.
* Color picker.

### Atributos:
#### - `value`: RGB
* Se inválido, o preto será exibido.

#### - `list`
* o id de uma tag `<datalist>` que está no mesmo documento.
* `<datalist>` irá conter uma lista de valores pré definidos a fim de ...
    * Os valores do `<datalist>` que não forem compatíveis com o campo ...

<br><hr><br>

#### Exemplo completo:

<br>

<datalist id="colorsData">
    <option>#4C3F91</option>
    <option>#9146FF</option> <!-- roxo da Twitch -->
    <option>#B958A5</option>
    <option>#FF5677</option>
</datalist>
<input type="color" value="#9146FF" list="colorsData">

<br>

```HTML
    <!-- HTML -->
    <datalist id="colorsData">
        <option>#4C3F91</option>
        <option>#9146FF</option> <!-- roxo da Twitch -->
        <option>#B958A5</option>
        <option>#FF5677</option>
    </datalist>
    <input type="color" value="#9146FF" list="colorsData">
```

<br><hr><br>

>&Kfr;&ifr;&efr;&rfr;&ifr;&cfr;&ofr;

