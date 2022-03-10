# Exemplo de formulário de contato

## Crie um formulário de contato

1. O formulário deverá conter um título de nome Contato. Usar fieldset e legend para essa finalidade.

2. O formulário conterá 3 campos:
    * nome (input text);
    * email (input email);
    * mendagem (textarea).

3. O formulário deverá conter regras de acessibilidade, como o label para cada campo, por exemplo.

<br><hr><br>

<form action="">
    <fieldset>
        <legend>Contato</legend>
        <div>
            <label for="nome">Nome <span style="color: red">*</span></label><br>
            <input type="text" id="nome" name="nome" size="38" placeholder="Ex: Kiérico Grandão" required>    <!-- text -->
        </div><br>
        <div>
            <label for="email">email <span style="color: red">*</span></label><br>
            <input type="email" id="email" name="email" size="38" placeholder="kierico@dominio.com" required>    <!-- email -->
        </div><br>
        <div>
            <label for="mensagem">Mensagem <span style="color: red">*</span></label><br>
            <textarea id="mensagem" name="mensagem" rows="7" cols="35" maxlength="255" placeholder="Digite sua mensagem" required></textarea>     <!-- textarea -->
        </div><br>
        <div>
            <button>Enviar</button>
        </div>
    </fieldset>
</form>

<br><hr><br>

