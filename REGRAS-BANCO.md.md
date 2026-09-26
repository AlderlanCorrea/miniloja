# Regras do Banco de Dados

## Banco

Nome:

```text
estoque_db
```

---

# 1. Tabela `categorias`

## Campos

- [ ] `id`
- [ ] `nome`

## Regras

- [ ] `id` será a chave primária
- [ ] `id` será AUTO_INCREMENT
- [ ] `nome` será obrigatório
- [ ] Não permitir categoria sem nome
- [ ] Avaliar se o nome da categoria deve ser único

---

# 2. Tabela `produtos`

## Campos

- [ ] `id`
- [ ] `nome`
- [ ] `categoria_id`
- [ ] `preco`
- [ ] `estoque`
- [ ] `criado_em`

## Regras

### ID

- [ ] Chave primária
- [ ] AUTO_INCREMENT

### Nome

- [ ] Obrigatório
- [ ] Não permitir nome vazio

### Categoria

- [ ] Obrigatória
- [ ] Deve existir na tabela `categorias`
- [ ] Criar chave estrangeira

### Preço

- [ ] Obrigatório
- [ ] Deve ser maior que zero
- [ ] Utilizar DECIMAL

### Estoque

- [ ] Obrigatório
- [ ] Deve ser maior ou igual a zero
- [ ] Utilizar INT

### Data

- [ ] Registrar automaticamente a data de criação

---

# 3. Tabela `movimentacoes`

## Campos

- [ ] `id`
- [ ] `produto_id`
- [ ] `tipo`
- [ ] `quantidade`
- [ ] `criado_em`

## Regras

### ID

- [ ] Chave primária
- [ ] AUTO_INCREMENT

### Produto

- [ ] Obrigatório
- [ ] Deve existir na tabela `produtos`
- [ ] Criar chave estrangeira

### Tipo

Tipos permitidos inicialmente:

```text
entrada
saida
```

- [ ] Não permitir outros tipos

### Quantidade

- [ ] Obrigatória
- [ ] Deve ser maior que zero
- [ ] Utilizar INT

### Data

- [ ] Registrar automaticamente a data da movimentação

---

# 4. Relacionamentos

## Categorias → Produtos

```text
categorias.id
      ↓
produtos.categoria_id
```

Regra:

- [ ] Uma categoria pode possuir vários produtos
- [ ] Um produto pertence a uma categoria

---

## Produtos → Movimentações

```text
produtos.id
      ↓
movimentacoes.produto_id
```

Regra:

- [ ] Um produto pode possuir várias movimentações
- [ ] Uma movimentação pertence a um produto

---

# 5. Regras de estoque

## Entrada

Exemplo:

```text
Estoque atual = 10
Entrada = 5

10 + 5 = 15
```

- [ ] Registrar movimentação
- [ ] Aumentar estoque do produto

---

## Saída

Exemplo:

```text
Estoque atual = 15
Saída = 3

15 - 3 = 12
```

- [ ] Registrar movimentação
- [ ] Diminuir estoque do produto

---

## Estoque insuficiente

Exemplo:

```text
Estoque atual = 5
Saída = 8
```

Resultado:

```text
❌ Operação não permitida
```

- [ ] Bloquear saída
- [ ] Não registrar movimentação
- [ ] Não alterar estoque
- [ ] Informar o usuário

---

# 6. Exclusão de produtos

Precisamos definir o comportamento de um produto que já possui movimentações.

### Decisão

- [ ] Permitir exclusão
- [ ] Bloquear exclusão
- [ ] Utilizar exclusão lógica

**Decisão atual:** ainda não definida.

---

# 7. Categorias

Precisamos definir o comportamento de uma categoria que possui produtos.

- [ ] Permitir exclusão
- [ ] Bloquear exclusão
- [ ] Utilizar exclusão lógica

**Decisão atual:** ainda não definida.

---

# 8. Integridade dos dados

- [ ] Utilizar chaves primárias
- [ ] Utilizar chaves estrangeiras
- [ ] Definir campos obrigatórios
- [ ] Definir valores padrão
- [ ] Definir tipos corretos
- [ ] Validar dados no PHP
- [ ] Validar dados no JavaScript

---

# 📌 Status

**Etapa atual:** Definição das regras do banco

**Próxima decisão:**
Definir como funcionará a exclusão de produtos e categorias.