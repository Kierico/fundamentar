# <abbr title="Também chamado de 'radio button' mesmo não sendo um botão.">Radio</abbr>

## `<input type="radio">`
* Projetado para selecionar uma <mark style="background-color: lightgreen">única</mark> opção de um grupo de opções.

### Atriburos:
#### - `checked`
* indica que o campo foi marcado.

#### - `value`
* valor que aquele campo contém.

<br>

#### Exemplo completo:

<br>

<fieldset>
    <legend>Bora rodízio de Sushi?</legend>
        <div>
            <input type="radio" id="yes" name="sushi" value="sim" checked>
            <label>Sim</label>
        </div>
        <div>
            <input type="radio" id="no" name="sushi" value="não">
            <label>Não</label>
        </div>
</fieldset>

<br>

```HTML
    <!-- HTML -->
    <fieldset>
        <legend>Bora rodízio de Sushi?</legend>
            <div>
                <input type="radio" id="yes" name="sushi" value="sim" checked>
                <label>Sim</label>
            </div>
            <div>
                <input type="radio" id="no" name="sushi" value="não">
                <label>Não</label>
            </div>
    </fieldset>
```

<br><hr><br>

>&Kfr;&ifr;&efr;&rfr;&ifr;&cfr;&ofr;

