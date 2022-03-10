# Checkbox

## `<input type="checkbox">`
* Caixas que podem ser marcadas.
* Selecionar um valor para ser enviado.
* Se não selecionado, não será enviado nenhum dado (vazio).

### Atributos:
#### - `globais`
#### - `value`
* valor que aquele campo contém.
* se não estiver presente, o padrão é 'on'.

#### - `checked`
* para deixar o campo marcado por padrão.
* atributo booleano.

<br>

### Marcar Múltiplos Valores:
* Usaremos o atributo '`name`' com o mesmo nome para os diversos campos.

<br><hr><br>

#### Exemplo completo:

<fieldset>
    <legend>Choose your interests?</legend>
    <div>
        <input type="checkbox" name="interest" id="conding" value="conding" checked>
        <label for="conding">Coding</label>
    </div>
    <div>
        <input type="checkbox" name="interest" id="music" value="music">
        <label for="music">Music</label>
    </div>
</fieldset>

<br>

```HTML
    <!-- HTML -->
    <fieldset>
        <legend>Choose your interests?</legend>
        <div>
            <input type="checkbox" name="interest" id="coding" value="coding" checked>
            <label for="coding">Sim</label>
        </div>
        <div>
            <input type="checkbox" name="interest" id="music" value="music">
            <label for="music">Não</label>
        </div>
    </fieldset>
```

<br><hr><br>

>&Kfr;&ifr;&efr;&rfr;&ifr;&cfr;&ofr;

