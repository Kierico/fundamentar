# Search

## `<input type="search">`
* Para campos de busca
* É igual ao campo do tipo 'text' mas poderá ser um pouco diferente dependendo do User Agent (navegador).

### Atributos:
#### - `list` / `<datalist>`
#### - `pattern`
#### - `aria-label`
* `aria-label` vai servir para quando não tivermos o '`label`'.

<br>
<br>

<datalist id="searchTerms">
    <option>Windows</option>
    <option>Linux</option>
    <option>Mac</option>
</datalist>

<form action="">
    <input type="search" name="q" list="searchTerms" placeholder="Digite teu termo de busca." id="" ut="" size="23" arial-label="Campo de pesquisa: Digite seu termo de busca.">
    <button>Pesquisar</button>
</form>

<br>

```HTML
    <!-- HTML -->
    <datalist id="searchTerms">
    <option>Windows</option>
    <option>Linux</option>
    <option>Mac</option>
    </datalist>

    <form action="">
        <input type="search" name="q" list="searchTerms" placeholder="Digite teu termo de busca." id="" ut="" size="23" arial-label="Campo de pesquisa: Digite seu termo de busca.">
        <button>Pesquisar</button>
    </form>
```

<br>
<br>

<form action="">
    <label for="searchId">Pesquisar pelo ID:</label><br>
    <input type="search" id="searchId" name="id" size="11" pattern="[0-9]{2}" title="Número do ID: 00 a 99.">
    <button>Pesquisa</button>
</form>

<br>
 
 ```HTML
    <!-- HTML -->
    <form action="">
        <label for="searchId">Pesquisar pelo ID:</label><br>
        <input type="search" id="searchId" name="id" size="11" pattern="[0-9]{2}" title="Número do ID: 00 a 99.">
        <button>Pesquisa</button>
    </form>
 ```

    pattern="[0-9]{2}" 
    * [0-9] = só números.
    * {2} = núremos com dois digitos.

<br><hr><br>

>&Kfr;&ifr;&efr;&rfr;&ifr;&cfr;&ofr;

