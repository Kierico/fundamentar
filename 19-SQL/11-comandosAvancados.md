# SQL
## 11 - Comandos Avançados

```sql
    -- ORDER BY, ordem crescente
    SELECT * FROM aluno
    ORDER BY nome

    SELECT * FROM aluno
    ORDER BY responsavel

    SELECT * FROM professor
    ORDER BY nome

    SELECT * FROM professor
    ORDER BY materia

    -- ORDER BY DESC, ordem decrescente
    SELECT * FROM professor
    ORDER BY materia DESC


    -- LIMIT
    SELECT * FROM aluno LIMIT 2


    -- OFFSET, ingnora. Ex: ignora os dois (1 e 2) primeiros e traz os quatros (3, 4, 5 e 6) do LIMIT.
    SELECT * FROM funcionarios
    LIMIT 4 OFFSET 2


    -- COUNT
    SELECT COUNT(nome) FROM funcionarios
    SELECT COUNT(id_departamento) FROM funcionarios

    -- GROUP BY
    SELECT id_departamento, COUNT(id_departamento) 
    FROM funcionarios
    GROUP BY id_departamento

    -- JOIN, GROUP BY e COUNT juntos
    SELECT departamentos.descricao, COUNT(funcionarios.id_departamento) 
    FROM funcionarios
    JOIN departamentos
    ON funcionarios.id_departamento = departamentos.id_dept
    GROUP BY departamentos.id_dept

    -- HAVING, se faz com campos agrupados, onde o WHERE não faz.
    SELECT departamentos.descricao, COUNT(funcionarios.id_departamento) FROM funcionarios
    JOIN departamentos
    ON funcionarios.id_departamento = departamentos.id_dept
    GROUP BY departamentos.id_dept
    HAVING COUNT(funcionarios.id_departamento) >= 2

    SELECT departamentos.descricao, COUNT(funcionarios.id_departamento) FROM funcionarios
    JOIN departamentos
    ON funcionarios.id_departamento = departamentos.id_dept
    GROUP BY departamentos.id_dept
    HAVING COUNT(funcionarios.id_departamento) IN(1, 3)
    ORDER BY funcionarios.id_departamento DESC
```
