# SQL
## 09 - INSERT INTO, UPDATE e DELETE

```sql
    -- Mais Comando --
    -- INSERT INTO
    INSERT INTO aluno(nome, cpf, responsavel) VALUES ('Maria Luiza', 0123456789, 'Wantuil Soares')

    -- UPDATE
    -- Só rodar com o WHERE se não afeta a todos.
    UPDATE aluno SET nome='Mariano Soares', responsavel='Marcio Soares' WHERE matricula = 2
    UPDATE aluno SET nome='Mariano Garcia', responsavel='Marcio Garcia', cpf=9876543210 WHERE matricula = 2

    -- DELETE
    -- Só rodar com o WHERE se não afeta a todos.
    DELETE FROM aluno WHERE matricula = 4
```
