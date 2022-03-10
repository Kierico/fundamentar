# File

## `<input type="file">`
* Usuário poderá escolher 1 ou mais arquivos para enviar no formulário.

### Atributos:
#### - `value`
* contém o arquivo a ser enviado.

#### - `accept`
* descreve que tipos de arquivos serão aceitos.
* exemplo: .doc, .docx, .pdf, audio/*, image/png, .png.

#### - `files`
* a lista de arquivo ou arquivos.

#### - `multiple`
* Atributo boolean.
* permite o envio de múltiplos arquivos.

<br>

#### Envios dos arquivos:

    Para envio dos arquivos o formulário deverá utilizar o método `POST` e o atributo enctype como "multipart/form-data".

```HTML
    <!-- HTML -->
    <form action="" method="post" enctype="miltipart/form-data">
        <input type="file">
    </form>
```
>O `method` e o `enctype`, só se houver um 'input' do tipo 'file' no formulário.

<br><hr><br>

#### Exemplo completo:

<br>

<form action="" method="post" enctype="miltipart/form-data">
    <input type="file" files accept=".pdf" multiple>
</form>

<br>

```HTML
    <!-- HTML -->
    <form action="" method="post" enctype="miltipart/form-data">
    <input type="file" files accept=".pdf" multiple>
</form>
```

<br><hr><br>

>&Kfr;&ifr;&efr;&rfr;&ifr;&cfr;&ofr;