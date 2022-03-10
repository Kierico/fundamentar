# Textarea

## `<textarea>`
* mais de uma linha
* útil para textos grandes

### Atributos
#### - `id`
#### - `name`
#### - `rows` e `cols`
#### - `minlength` e `maxlength`
#### - `wrap`
* Wrap 'on', a `textarea` envolve o texto.
    * soft, hard, off.
    >por padrão ele vem 'soft'.

####  - `... outros` comuns aos `<input>`'s.
* autocomplete, autofocus, disabled, placeholder, readonly, form, required.

<br>

<label for="message">Mensagem:</label>
<textarea name="message" id="message" rows="7" cols="35" maxlength="255" wrap="soft" placeholder="Digite sua mensagem aqui." required></textarea>

<br>

```HTML
    <!-- HTML -->
    <label for="message">Mensagem:</label>
    <textarea name="message" id="message" rows="7" cols="35" maxlength="255" wrap="soft" placeholder="Digite sua mensagem aqui." required></textarea> <!-- fechamento -->
```

>O fechamento da `<textarea>` tem que estar na mesma linha!

<br><hr><br>

>&Kfr;&ifr;&efr;&rfr;&ifr;&cfr;&ofr;

