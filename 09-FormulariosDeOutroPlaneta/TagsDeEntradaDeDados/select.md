# Select

## `<select>`
* Controle que fornece um menu de opções.

### `<option>`
* Contém as opções a serem selecionadas.
* Atributos necessários:
    * value.

### Atributos únicos
#### - `multiple`
* Habilita múltiplas opções.
* atributo booleano.

#### - `size`
* Quando opções visiveis?

<br>

<br><hr><br>

<label for="carSelect">Qual modelo do carro?</label><br>
<select name="carModel" id="carSelect" multiple size="7">
    <option value="" disabled>Selecione o modelo:</option>
    <option value="fiat">Mille</option>
    <option value="audi">A3</option>
    <option value="bmw">X6</option>
</select>

<br>

```HTML
    <!-- HTML -->
    <label for="carSelect">Qual modelo do carro?</label><br>
    <select name="carModel" id="carSelect" multiple size="7">
        <option value="" disabled>Selecione o modelo:</option>
        <option value="fiat">mille</option>
        <option value="audi">A3</option>
        <option value="bmw">X6</option>
    </select>
```

<br><hr><br>

>&Kfr;&ifr;&efr;&rfr;&ifr;&cfr;&ofr;

