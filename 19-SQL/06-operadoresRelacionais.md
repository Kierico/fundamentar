# SQL
## 06 - Operadores Relacionais
```sql
    SELECT * FROM aluno

    SELECT nome, responsavel FROM aluno

    SELECT * FROM aluno WHERE matricula = 1

    SELECT * FROM aluno WHERE cpf = 45678945645

    -- Campo de texto, não se usa o '=' e sim o 'like'.
    SELECT * FROM aluno WHERE nome like 'jakeliny gracielly'

    SELECT * FROM aluno WHERE nome like 'j%'

    SELECT * FROM aluno WHERE nome like '%G%'

    SELECT matricula, cpf FROM aluno WHERE nome like '%G%'

    SELECT * FROM aluno WHERE responsavel like 'josefina gracielly'

    SELECT * FROM aluno WHERE responsavel like 'josefina%'

    SELECT * FROM aluno WHERE responsavel like '%a'

    -- >, maior que:
    SELECT * FROM aluno WHERE matricula > 1

    -- <, menor que:
    SELECT * FROM aluno WHERE matricula < 2

    -- >=, maior ou igual que:
    SELECT * FROM aluno WHERE matricula >= 2

    -- <=, menor ou igual que:
    SELECT * FROM aluno WHERE matricula <= 2

    -- <>, não é igual a:
    SELECT * FROM aluno WHERE matricula <> 1

    -- !=, diferente de:
    SELECT * FROM aluno WHERE matricula != 3

```
