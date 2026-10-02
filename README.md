# 🛒 Miniloja

> Uma plataforma de e-commerce desenvolvida como projeto de estudos em desenvolvimento full-stack

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![JavaScript](https://img.shields.io/badge/JavaScript-43%25-yellow)
![PHP](https://img.shields.io/badge/PHP-40.1%25-purple)
![HTML](https://img.shields.io/badge/HTML-16.9%25-red)

---

## 📖 Sobre

**Miniloja** é um projeto educacional desenvolvido para consolidar conhecimentos em desenvolvimento web. Trata-se de uma aplicação de e-commerce que explora conceitos fundamentais de frontend e backend, integrando tecnologias modernas de forma prática e didática.

> **💡 Nota:** Este é um projeto de estudos. Todos os dados utilizados são **completamente fictícios** e criados exclusivamente para fins educacionais e de demonstração.

---

## ✨ Características

- 🎨 Interface intuitiva e responsiva
- 🔄 Integração completa entre frontend e backend
- 📦 Gerenciamento de produtos
- 🛍️ Carrinho de compras funcional
- 📱 Design moderno e clean

---

## 🛠️ Stack Tecnológico

| Tecnologia | Percentual | Propósito |
|-----------|-----------|----------|
| **JavaScript** | 43% | Interatividade e lógica frontend |
| **PHP** | 40.1% | Processamento backend e lógica de servidor |
| **HTML** | 16.9% | Estrutura e marcação das páginas |

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com os seguintes objetivos:

✅ Praticar desenvolvimento full-stack  
✅ Aprender integração frontend/backend  
✅ Explorar boas práticas de código  
✅ Criar um portfólio demonstrável  
✅ Experimentar com arquitetura web  

---

## 📊 Dados Fictícios

Todos os dados presentes neste projeto são **completamente fictícios**:

- ✓ Produtos com informações de exemplo
- ✓ Usuários e clientes fictícios
- ✓ Transações e pedidos de teste
- ✓ Valores monetários apenas para demonstração

**Seguro para usar em ambientes de teste, aprendizado e prototipagem.**

---

## 🚀 Como Começar

### Pré-requisitos

- **XAMPP** (Apache + PHP + MySQL)
- Navegador moderno
- Git (opcional)

### Instalação com XAMPP

```bash
# 1. Clone o repositório na pasta htdocs do XAMPP
cd C:\xampp\htdocs  # Windows
# ou
cd /Applications/XAMPP/htdocs  # macOS
# ou
cd /opt/lampp/htdocs  # Linux

git clone https://github.com/AlderlanCorrea/miniloja.git

# 2. Inicie o XAMPP Control Panel
# - Clique em "Start" para Apache e MySQL

# 3. Abra no navegador
# http://localhost/miniloja
```

### Configuração Rápida

1. Abra o **XAMPP Control Panel**
2. Inicie o módulo **Apache**
3. Abra `http://localhost/phpmyadmin` (opcional, se usar banco de dados)
4. Navegue para `http://localhost/miniloja`

---

## 📁 Estrutura do Projeto

```
C:\xampp\htdocs\miniloja\    (ou seu caminho XAMPP)
├── index.html              # Página principal
├── README.md               # Este arquivo
├── assets/                 # Imagens, CSS e recursos
│   ├── styles/
│   ├── images/
│   └── fonts/
├── js/                     # Arquivos JavaScript
│   ├── app.js
│   └── utils.js
├── php/                    # Backend PHP
│   ├── config.php
│   ├── produtos.php
│   └── carrinho.php
└── db/                     # Dados fictícios
    └── dados.php
```

---

## 💡 Como Usar

### Para Aprendizado

Estude o código-fonte para compreender:
- Como conectar frontend com backend
- Manipulação de DOM com JavaScript
- Processamento de dados com PHP
- Estrutura de um projeto web
- Como rodar projetos PHP localmente com XAMPP

### Para Prototipagem

Use este projeto como base para:
- Desenvolver seu próprio e-commerce
- Testar novas ideias e funcionalidades
- Criar um MVP (Minimum Viable Product)
- Implementar seus próprios recursos

### Para Portfólio

Adapte e melhore o projeto para:
- Adicionar novas funcionalidades
- Implementar design mais sofisticado
- Integrar com banco de dados real
- Deploy em servidor produção

---

## 🔧 Funcionalidades Principais

- **Catálogo de Produtos:** Listagem completa de produtos fictícios
- **Carrinho de Compras:** Sistema funcional de adição e remoção de itens
- **Interface Responsiva:** Funciona em desktop, tablet e mobile
- **Validações:** Tratamento de erros e validações básicas

---

## 💻 Desenvolvimento com XAMPP

### Arquivo de Configuração PHP

Você pode criar um arquivo `config.php` para facilitar o desenvolvimento:

```php
<?php
// config.php
define('BASE_URL', 'http://localhost/miniloja/');
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');  // XAMPP padrão é vazio
define('DB_NAME', 'miniloja');
?>
```

### Dicas de Desenvolvimento

- Use `http://localhost/phpmyadmin` para gerenciar banco de dados
- Ative o modo debug para ver erros PHP
- Utilize as ferramentas de desenvolvimento do navegador (F12)
- Teste suas mudanças em tempo real

---

## 📝 Observações Importantes

Se você quiser usar este código como base para um **projeto de produção**, lembre-se de:

- 🔒 Implementar segurança robusta (validações, autenticação, HTTPS)
- 💾 Conectar a um banco de dados real (MySQL, PostgreSQL, etc.)
- 🧪 Adicionar testes automatizados (unit tests, integration tests)
- 📋 Implementar conformidade com LGPD/GDPR
- 🚀 Realizar otimizações de performance
- 📚 Adicionar documentação técnica detalhada
- 🖥️ Deploy em um servidor web profissional (não use XAMPP para produção)

---

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tem sugestões, melhorias ou encontrou bugs:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📧 Contato & Autor

**Alderlan Correa**

- GitHub: [@AlderlanCorrea](https://github.com/AlderlanCorrea)
- Email: correaalderlan@gmail.com

---

## 🙏 Agradecimentos

Obrigado por visitar este projeto! Se foi útil para seus estudos, considere deixar uma ⭐ no repositório.

---

<div align="center">

**Desenvolvido com ❤️ para fins de estudos e aprendizado**

*Desenvolvido e testado com XAMPP*

*Último update: 2026*

</div>
