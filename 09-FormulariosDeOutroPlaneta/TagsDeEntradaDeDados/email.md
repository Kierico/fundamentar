# Email

## `<input type="email"`

* Espera que o usuário digite um email
* Irá validar se o valor digitado é um email

<br>

### Atributos

#### - `placeholder`
#### - `readonly` / `disabled`
#### - `value`
#### - `required`

#### - `multiple`
* o campo irá receber 1 ou mais emails, separados por vírgula.

### - `minlength` / `maxlength`
* O mínimo e/ou máximo valor que o campo irá conter.

### - `size`
* Valor numérico indicando quantos caracteres esse campo deveria conter, midificando o tamanho do campo para o usuário.

### - `pattern`

* Uso de expressão regular para validar o campo
* exemplo: o usuário só poderá colocar email do domínio rocketseat.com.br
    * pattern=".+@rocketseat\\.com\\.br"
        1. ponto (.) - qualquer caractere;
        2. mais (+) - uma ou mais vezes (caracteres);
        3. contra barra é só para aceitar o ponto (.) literal.

### - `list`
* o id de uma tag `<datalist>` que está no mesmo documento
* `<datalist>` irá conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores estão disponíveis.
    * Os valores do `<datalist>` que não forem compatíveis com o campo, não serão apresentados como sugestão.

<br>
<hr>
<br>
<br>

#### Exemplo completo:

<br>

<form action="">
    <datalist id="emailsList">
        <option>kierico@gmail.com</option>
        <option>kiericograndao@gmail.com</option>
    </datalist>
    <input type="email" placeholder="email@email.com, email@email.com" required multiple size="30" pattern=".+@rocketseat\.com\.br" title="Somente emails rocketseat.com.br serão aceitos" list="emailsList">
    <button type="submit">Enviar</button>
</form>

<br>

```HTML
    <!-- HTML -->
    <form action="">
        <datalist id="emailsList">
            <option>kierico@gmail.com</option>
            <option>kiericograndao@gmail.com</option>
        </datalist>
        <input type="email" placeholder="email@email.com, email@email.com" required multiple size="30" pattern=".+@rocketseat\.com\.br" title="Somente emails rocketseat.com.br serão aceitos" list="emailsList">
        <button type="submit">Enviar</button>
    </form>
```

<br><hr><br>

>&Kfr;&ifr;&efr;&rfr;&ifr;&cfr;&ofr;

