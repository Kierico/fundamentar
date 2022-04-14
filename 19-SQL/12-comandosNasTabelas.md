# SQL
## 12 - Comandos nas Tabelas

```sql
    -- CREATE TABLE
    CREATE TABLE alunos (
    matricula INTEGER PRIMARY KEY AUTOINCREMENT, -- AUTOINCREMENT - o próprio banco gera um número de matrícula.
    nome TEXT,
    cpf INTEGER UNIQUE, -- UNIQUE - número único
    responsavel TEXT
    )

    CREATE TABLE professores (
    id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    cpf INTEGER UNIQUE,
    materia TEXT
    )

    CREATE TABLE aulas (
    id_professor INTEGER,
    matricula INTEGER,
    FOREIGN KEY(id_professor) REFERENCES professores(id_professor)
    FOREIGN KEY(matricula) REFERENCES alunos(matricula)
    )


    -- ALTER TABLE, fazer alterações na tabela.
    ALTER TABLE aluno RENAME TO alunos

    ALTER TABLE professor RENAME TO professores

    ALTER TABLE aulas RENAME COLUMN matricula TO matricula_aluno


    -- DROP TABLE, serve para excluir uma tabela.
    DROP TABLE alunos

    DROP TABLE aulas

    DROP TABLE professores
```
