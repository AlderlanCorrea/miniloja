# Etapas — Banco de Dados

## Projeto: Sistema de Controle de Estoque

Banco utilizado:

```text
estoque_db
```

---

# 1. Criar o banco

- [x] Abrir o XAMPP
- [x] Iniciar Apache
- [x] Iniciar MySQL
- [x] Abrir o phpMyAdmin
- [x] Criar o banco `estoque_db`
- [x] Selecionar o banco
- [x] Executar:

```sql
CREATE DATABASE estoque_db;
```

```sql
USE estoque_db;
```

---

# 2. Criar tabela `categorias`

Estrutura:

```text
categorias
├── id
└── nome
```

- [x] Criar tabela
- [x] Definir `id` como PRIMARY KEY
- [x] Definir `id` como AUTO_INCREMENT
- [x] Definir `nome` como obrigatório
- [x] Definir `nome` como UNIQUE
- [x] Testar inserção de categoria

Exemplos:

```text
Eletrônicos
Informática
Acessórios
```

---

# 3. Criar tabela `produtos`

Estrutura:

```text
produtos
├── id
├── nome
├── categoria_id
├── preco
├── estoque
├── ativo
└── criado_em
```

- [x] Criar tabela
- [x] Definir `id` como PRIMARY KEY
- [x] Definir `id` como AUTO_INCREMENT
- [x] Criar campo `nome`
- [x] Criar campo `categoria_id`
- [x] Criar campo `preco`
- [x] Criar campo `estoque`
- [x] Criar campo `ativo`
- [x] Criar campo `criado_em`
- [x] Criar FOREIGN KEY para `categorias`
- [x] Definir valor padrão de `ativo`
- [x] Definir data automática de criação

---

# 4. Criar tabela `movimentacoes`

Estrutura:

```text
movimentacoes
├── id
├── produto_id
├── tipo
├── quantidade
└── criado_em
```

- [x] Criar tabela
- [x] Definir `id` como PRIMARY KEY
- [x] Definir `id` como AUTO_INCREMENT
- [x] Criar campo `produto_id`
- [x] Criar campo `tipo`
- [x] Criar campo `quantidade`
- [x] Criar campo `criado_em`
- [x] Criar FOREIGN KEY para `produtos`
- [x] Definir tipos permitidos: `entrada` e `saida`
- [x] Definir quantidade maior que zero

---

# 5. Conferir relacionamentos

## Categoria → Produto

```text
categorias.id
       ↓
produtos.categoria_id
```

- [x] Conferir FOREIGN KEY
- [x] Testar produto associado a uma categoria
- [x] Testar categoria inexistente

---

## Produto → Movimentação

```text
produtos.id
       ↓
movimentacoes.produto_id
```

- [x] Conferir FOREIGN KEY
- [x] Testar movimentação associada a um produto
- [x] Testar produto inexistente

---

# 6. Inserir categorias de teste

Exemplos:

```text
Eletrônicos
Informática
Acessórios
```

- [x] Inserir categorias
- [x] Conferir com SELECT

```sql
SELECT * FROM categorias;
```

---

# 7. Inserir produtos de teste

Exemplos:

```text
Mouse Gamer
Teclado Mecânico
Webcam
Headset
Monitor
```

- [x] Inserir produtos
- [x] Associar cada produto a uma categoria
- [x] Definir preço
- [x] Definir estoque inicial
- [x] Conferir campo `ativo`

Consulta:

```sql
SELECT * FROM produtos;
```

---

# 8. Inserir movimentações de teste

Criar algumas entradas:

```text
Mouse Gamer → entrada → 10
Webcam → entrada → 5
Headset → entrada → 8
```

Criar algumas saídas:

```text
Mouse Gamer → saída → 2
Webcam → saída → 1
```

- [x] Inserir entradas
- [x] Inserir saídas
- [x] Conferir movimentações

Consulta:

```sql
SELECT * FROM movimentacoes;
```

---

# 9. Testar relacionamentos com JOIN

Consultar produtos junto com suas categorias:

```sql
SELECT
    produtos.nome,
    categorias.nome AS categoria
FROM produtos
INNER JOIN categorias
    ON produtos.categoria_id = categorias.id;
```

- [ ] Executar consulta
- [ ] Entender o INNER JOIN
- [ ] Conferir resultado

---

# 10. Testar histórico de produto

Consultar as movimentações de um produto:

```sql
SELECT
    produtos.nome,
    movimentacoes.tipo,
    movimentacoes.quantidade,
    movimentacoes.criado_em
FROM movimentacoes
INNER JOIN produtos
    ON movimentacoes.produto_id = produtos.id;
```

- [ ] Executar consulta
- [ ] Conferir produtos
- [ ] Conferir entradas
- [ ] Conferir saídas
- [ ] Entender o relacionamento

---

# 11. Testar regras

## Produto

- [ ] Testar nome vazio
- [ ] Testar preço inválido
- [ ] Testar estoque negativo
- [ ] Testar categoria inexistente

## Movimentação

- [ ] Testar quantidade zero
- [ ] Testar quantidade negativa
- [ ] Testar tipo inválido
- [ ] Testar produto inexistente

## Estoque

- [ ] Testar entrada
- [ ] Testar saída
- [ ] Testar saída maior que o estoque
- [ ] Confirmar que estoque não fica negativo

---

# 12. Testar desativação de produto

Produto ativo:

```text
ativo = 1
```

Produto desativado:

```text
ativo = 0
```

- [ ] Testar produto ativo
- [ ] Desativar produto
- [ ] Consultar produtos ativos
- [ ] Confirmar que o histórico continua existindo

Consulta:

```sql
SELECT *
FROM produtos
WHERE ativo = 1;
```

---

# 13. Testar exclusão de categoria

- [ ] Criar categoria sem produtos
- [ ] Testar exclusão
- [ ] Criar categoria com produtos
- [ ] Tentar excluir
- [ ] Confirmar comportamento definido nas regras

---

# 14. Revisão do banco

- [ ] Todas as tabelas existem
- [ ] Todas as PRIMARY KEY estão corretas
- [ ] Todas as FOREIGN KEY estão corretas
- [ ] Campos obrigatórios estão definidos
- [ ] Valores padrão estão definidos
- [ ] Relacionamentos funcionam
- [ ] Dados de teste funcionam
- [ ] Regras foram testadas

---

# 15. Criar arquivo SQL definitivo

Depois que tudo estiver funcionando:

- [ ] Exportar banco pelo phpMyAdmin
- [ ] Criar `database/estoque.sql`
- [ ] Conferir o arquivo
- [ ] Testar importação em um banco vazio
- [ ] Confirmar que o banco pode ser reconstruído pelo SQL

---

# 📌 Status

**Etapa atual:**

Definição da estrutura do banco.

**Próxima tarefa:**

Criar o banco `estoque_db` e a tabela `categorias`.

---

# 🧭 Ordem resumida

```text
Banco
  ↓
Categorias
  ↓
Produtos
  ↓
Relacionamentos
  ↓
Movimentações
  ↓
Dados de teste
  ↓
JOINs
  ↓
Testes
  ↓
SQL definitivo
  ↓
PHP
```