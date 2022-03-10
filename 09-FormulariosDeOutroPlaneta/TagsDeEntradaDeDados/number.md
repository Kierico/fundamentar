# Number

## `<input type="number">`
* Entrada de números.

### Atributos:
#### - `min` / `max`
* mínimo e máximo de números que poderá digitar.
#### - `step`
* pula os números de acordo com o valor inserido.
    * exemplo: ster="2", pula de dois em dois.

<br>
<br>

<form>
    <datalist id="numbersList">
        <option>2</option>
        <option>4</option>
        <option>6</option>
        <option>8</option>
        <option>10</option>
    </datalist>
    <input type="number" min="0" max="10" step="2" placeholder="0" value="" list="numbersList">
    <button>Confirmar</button>
</form>

<br>

```HTML
    <!-- HTML -->
    <form>
        <datalist id="numbersList">
            <option>2</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
            <option>10</option>
        </datalist>
        <input type="number" min="0" max="10" step="2" placeholder="0" value="" list="numbersList">
        <button>Confirmar</button>
    </form>
```

<br><hr><br>

