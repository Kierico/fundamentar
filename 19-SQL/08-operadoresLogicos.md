# SQL
## 08 - Operadores Lógicos

```sql
    --Operadores Lógicos --
    -- AND
    SELECT * FROM aluno
    WHERE nome like 'J%' AND matricula > 2

    -- OR
    SELECT * FROM aluno
    WHERE matricula > 1 OR nome like 'J%'

    SELECT * FROM aluno
    WHERE matricula > 2 OR nome like 'G%'

    -- BETWEEN
    SELECT * FROM funcionarios
    WHERE id_funcionario BETWEEN 4 AND 7

    -- NOT BETWEEN
    SELECT * FROM funcionarios
    WHERE id_funcionario NOT BETWEEN 4 AND 7

    -- IN
    SELECT * FROM funcionarios
    WHERE id_departamento IN (1, 2, 5)

    -- NOT IN
    SELECT * FROM funcionarios
    WHERE id_departamento NOT IN (1, 2, 5)

    -- IS NULL
    SELECT * FROM funcionarios
    WHERE id_departamento IS NULL

    -- IS NOT NULL
    SELECT * FROM funcionarios
    WHERE id_departamento IS NOT NULL
```
