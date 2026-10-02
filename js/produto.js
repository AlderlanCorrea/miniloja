console.log("produtos.js carregado!");
fetch("php/produtos/listar.php")
  .then((resposta) => resposta.json())
  .then((produtos) => {
    fetch("php/produtos/listar.php")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        const listaProdutos = document.getElementById("lista-produtos");

        produtos.forEach((produto) => {
          let classeEstoque = "";
          let avisoEstoque = "";

          if (Number(produto.estoque) <= 5) {
            classeEstoque = "estoque-baixo";
            avisoEstoque = "⚠ Estoque baixo";
          }

          const div = document.createElement("div");
          div.classList.add("card-produto");

          div.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>Categoria: ${produto.categoria}</p>
                <p>Preço: R$ ${produto.preco}</p>
                <p class="${classeEstoque}">
                    Estoque: ${produto.estoque}
                </p>
                <span class="aviso-estoque">${avisoEstoque}</span>
            `;

          listaProdutos.appendChild(div);
        });
      })
      .catch((erro) => {
        console.error("Erro:", erro);
      });
  })
  .catch((erro) => {
    console.error("Erro:", erro);
  });
