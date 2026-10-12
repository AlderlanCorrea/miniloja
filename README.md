# Mini Loja

Projeto de aprendizado para praticar a construção de uma aplicação web de
controle de produtos e estoque. O projeto está em desenvolvimento e **não é um
e-commerce pronto para uso comercial nem um sistema seguro para produção**.

## Estado atual

O repositório reúne uma interface inicial de dashboard, páginas em construção,
uma conexão PHP/MySQL e os primeiros fluxos de produtos.

| Área | Estado |
| --- | --- |
| Dashboard | Estrutura HTML e CSS inicial; ainda não exibe indicadores alimentados pelo banco. |
| Produtos | Há uma listagem via PHP e um formulário que envia cadastro ao backend. Os fluxos de edição e exclusão ainda não estão implementados. |
| Banco de dados | O código espera um banco MySQL chamado `estoque_db`. Há anotações e testes manuais documentados, mas o arquivo SQL do repositório está vazio. |
| Movimentações | Há regras e arquivos planejados, mas as telas e os endpoints ainda estão vazios/incompletos. |
| Autenticação e segurança | Não há autenticação ou autorização; veja [Limites de segurança](#limites-de-seguranca). |

O cadastro e a listagem dependem de um banco configurado e acessível pelo PHP.
Um formulário ou arquivo presente no projeto não significa que aquela
funcionalidade esteja concluída.

## Ferramentas de design

O **Google Stitch** é utilizado como apoio para explorar e gerar ideias de
interfaces. O **Figma** é utilizado para organizar e refinar o design das telas
e dos componentes. As referências visuais são então implementadas no projeto
com HTML e CSS; os arquivos exportados usados pela interface ficam em
`assets/img/`.

## Tecnologias

- HTML5 e CSS3 — estrutura e estilos da interface.
- JavaScript — interação com os formulários e chamadas à API usando `fetch`.
- PHP — endpoints para operações iniciais de produtos.
- MySQL — banco de dados acessado pela extensão `mysqli`.
- XAMPP — ambiente local sugerido para Apache, PHP e MySQL.

Não é necessário instalar Node.js ou executar `npm install` para abrir a versão
atual do projeto.

## Estrutura

```text
miniloja/
├── assets/
│   └── img/                 # Logos, imagens e ícones
├── css/
│   ├── style.css            # Estilos principais
│   ├── dashboard.css        # Reservado para estilos do dashboard
│   └── produtos.css         # Reservado para estilos de produtos
├── database/
│   └── estoque.slq          # Arquivo atualmente vazio (extensão digitada incorretamente)
├── js/
│   ├── produto.js           # Listagem e envio do formulário de produto
│   ├── movimentacoes.js     # Em construção
│   └── app.js               # Reservado para lógica geral
├── pages/
│   ├── produtos.html        # Estrutura inicial de produtos
│   └── movimentacoes.html   # Em construção
├── php/
│   ├── conexao.php          # Configuração atual da conexão MySQL
│   ├── produtos/
│   │   ├── listar.php
│   │   ├── cadastrar.php
│   │   ├── editar.php      # Ainda vazio
│   │   └── excluir.php     # Ainda vazio
│   └── movimentacoes/
│       ├── entrada.php     # Ainda vazio
│       └── saida.php       # Ainda vazio
├── index.html               # Dashboard e formulário inicial
├── ETAPAS-BANCO.md.md       # Anotações e etapas de estudo do banco
├── PLANEJAMENTO.md.md       # Escopo e planejamento inicial
├── REGRAS-BANCO.md.md       # Regras planejadas para o banco
├── regras.txt               # Anotações de regras do projeto
└── testesExecultados.txt    # Registro de testes manuais do banco
```

## Executar localmente com XAMPP

### Requisitos

- XAMPP com Apache, PHP e MySQL/MariaDB.
- Navegador moderno.
- Git, se for clonar o repositório.

### 1. Colocar o projeto no `htdocs`

Clone o repositório dentro da pasta `htdocs` do XAMPP. No ambiente em que o
projeto foi desenvolvido, esse caminho é `C:\xampp1\htdocs\miniloja`.

```powershell
cd C:\xampp1\htdocs
git clone https://github.com/AlderlanCorrea/miniloja.git
```

Se já recebeu uma cópia dos arquivos, coloque a pasta `miniloja` em
`C:\xampp1\htdocs` ou na pasta `htdocs` da sua instalação do XAMPP.

### 2. Iniciar os serviços

No XAMPP Control Panel, inicie **Apache** e **MySQL**.

### 3. Criar e preparar o banco

1. Abra `http://localhost/phpmyadmin`.
2. Crie um banco chamado `estoque_db`.
3. Crie as tabelas `categorias`, `produtos` e `movimentacoes`, seus campos e
   relacionamentos conforme as anotações em [REGRAS-BANCO.md.md](REGRAS-BANCO.md.md)
   e [ETAPAS-BANCO.md.md](ETAPAS-BANCO.md.md).
4. Se necessário, insira categorias de teste e produtos compatíveis com as
   chaves estrangeiras.

**Atenção:** `database/estoque.slq` está vazio e não pode ser importado para
criar o banco. A extensão `.slq` também parece ser um erro de digitação para
`.sql`. Até que exista um script SQL válido, a estrutura do banco precisa ser
criada manualmente seguindo a documentação acima.

### 4. Conferir a conexão PHP/MySQL

Abra `php/conexao.php`. Atualmente, a conexão está configurada com estes
valores locais:

```php
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "estoque_db";
```

Altere os valores para corresponder à sua instalação local, se necessário. O
projeto **ainda não carrega essas configurações de um arquivo `.env`**. Não
coloque senhas reais em arquivos versionados nem publique credenciais.

### 5. Abrir a aplicação

Visite `http://localhost/miniloja/` no navegador. Abra pelo Apache, e não
diretamente como `file:///...`: as chamadas do frontend precisam que o PHP seja
executado pelo servidor.

## Fluxos disponíveis para estudo

- O JavaScript faz uma chamada `GET` para `php/produtos/listar.php` para carregar
  os produtos.
- O formulário de cadastro envia um `POST` em JSON para
  `php/produtos/cadastrar.php`.
- A listagem associa produtos às categorias por meio de uma consulta com
  `JOIN`.
- O cadastro utiliza uma instrução preparada (`mysqli::prepare`) para inserir
  os dados.

Os testes manuais descritos em [testesExecultados.txt](testesExecultados.txt)
registram, entre outros pontos, testes de chaves estrangeiras e operações
manuais de estoque. Eles **não substituem testes automatizados** nem garantem
que todos os fluxos da aplicação estejam concluídos.

## Limites de seguranca

Este projeto é exclusivamente para aprendizado e execução local com dados de
teste. Ele não foi preparado para receber tráfego público, dados pessoais,
credenciais ou informações de clientes.

No estado atual, entre outras limitações:

- não há login, sessões de usuário, autorização ou controle de permissões;
- não há proteção CSRF, limitação de tentativas ou configuração de HTTPS;
- as credenciais do banco estão diretamente em `php/conexao.php`, com os
  valores padrão comuns do XAMPP (`root` sem senha);
- as validações do backend e as regras de negócio ainda são incompletas;
- os testes são manuais e não cobrem segurança ou todos os casos de erro;
- não há configuração de produção ou endurecimento do servidor.

O cadastro usa uma instrução preparada, o que é um aprendizado importante para
inserções no banco, mas **não torna a aplicação inteira segura**. As anotações
em `testesExecultados.txt` também mostram regras que ainda precisam ser validadas
na aplicação, como preço positivo, estoque não negativo e bloqueio de saídas
maiores que o estoque.

Antes de adaptar este projeto para uso real, seria necessário rever a segurança
de ponta a ponta: configuração fora do código versionado, validação no
servidor, tratamento seguro da saída, autenticação e autorização, proteção
contra CSRF, HTTPS, testes e revisão de implantação. Não use o projeto atual
diretamente em produção.

## Próximas melhorias sugeridas

Para tornar o projeto mais fácil de instalar, entender e manter, uma boa ordem
de próximos passos seria:

1. Criar um script `database/estoque.sql` válido, corrigir o nome atual
   `estoque.slq` e incluir dados mínimos de demonstração.
2. Separar a configuração local das credenciais versionadas: ler variáveis de
   ambiente no PHP, adicionar um `.env.example` sem segredos e ignorar o `.env`
   real no Git. O projeto ainda não oferece isso.
3. Completar validações e tratamento de erros no backend, inclusive estoque e
   movimentações; não depender somente das validações do navegador.
4. Concluir edição, exclusão e movimentações, garantindo que o histórico e o
   estoque permaneçam consistentes.
5. Organizar os nomes dos arquivos e extensões, por exemplo, corrigir
   `testesExecultados.txt` para `testesExecutados.md` e remover extensões
   duplicadas `.md.md` após atualizar as referências.
6. Adicionar testes reproduzíveis e documentar os resultados, em vez de
   depender apenas de testes manuais.
7. Adicionar uma licença somente quando a licença desejada estiver escolhida e
   documentada em um arquivo `LICENSE`.

## Documentação de estudo

- [Planejamento do projeto](PLANEJAMENTO.md.md)
- [Regras do banco](REGRAS-BANCO.md.md)
- [Etapas do banco](ETAPAS-BANCO.md.md)
- [Registro de testes manuais](testesExecultados.txt)

Esses documentos contêm notas de planejamento e podem não refletir exatamente
o código atual. Use a seção [Estado atual](#estado-atual) e os arquivos da
aplicação como referência para o que está implementado.

---

Projeto desenvolvido por [Alderlan Correa](https://github.com/AlderlanCorrea)
para fins de estudo.
