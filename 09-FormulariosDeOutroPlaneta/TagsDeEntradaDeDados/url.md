# URLs

## `<input type="url">`

* Espera que o usuário digite uma url.
* Irá validar se o valor digitado é uma url.

### Atributos:

#### - `placeholder`
#### - `readonly` / `disabled`
#### - `value`
#### - `required`
#### - `minlength` `maxlength`
* O mínimo e/ou máximo valor que o campo irá conter.

#### - `size`
* Valor númerico indicando quantos caracteres esse campo deveria conter, modificando o tamanho do campo para o usuário.

#### - `pattern`
* Uso de expressões regular para validar o campo.
* exemplo: os usuário só poderá colocar domínio '.com.br'.
    * pattern=".\*\\.com\\.br\\/.\*"

#### - `list`
* o id de uma tag `<datalist>` que está no mesmo documento.
* `<datalist>` irá conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores estão disponíveis.
    * Os valores do `<datalist>` qua não forem compatíveis com o campo, não serão apresentados como sugestão.

#### - `spellcheck`
* Atributo que recebe (true ou false).
* Habilidade a verificação ortográfica para este input.

<br><hr><br>

#### Exemplo completo:

<br>

<form action="">
    <datalist id="urlsData">
        <option>https://kierico.github.io</option>
    </datalist>
    <input type="url" placeholder="https://example.github.io" required size="19" pattern=".*\.github\.io\.*" title="Somentes domínios '.github.io' serão aceitos." required list="urlsData" spellcheck="false">
    <button typo="submit">Enviar</button>
</form>

<br>

```HTML
    <!-- HTML -->
    <form action="">
        <datalist id="urlsData">
            <option>https://kierico.github.io</option>
        </datalist>
        <input type="url" placeholder="https://example.github.io" required size="19" pattern=".*\.github\.io\.*" title="Somentes domínios '.github.io' serão aceitos." required list="urlsData" spellcheck="false">
        <button typo="submit">Enviar</button>
    </form>
```

<br><hr><br>

>&Kfr;&ifr;&efr;&rfr;&ifr;&cfr;&ofr;

