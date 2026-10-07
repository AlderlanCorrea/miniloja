const formProduto = document.getElementById("form-produto");

formProduto.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const categoria = document.getElementById("categoria").value;
  const preco = document.getElementById("preco").value;
  const estoque = document.getElementById("estoque").value;

  console.log("Nome:", nome);
  console.log("Categoria:", categoria);
  console.log("Preço:", preco);
  console.log("Estoque:", estoque);

  fetch("php/produtos/cadastrar.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      categoria_id: categoria,
      preco: preco,
      estoque: estoque,
    }),
  })
    .then((resposta) => resposta.json())
    .then((dados) => {
      console.log("Resposta do PHP:", dados);
    })
    .catch((erro) => {
      console.error("Erro:", erro);
    });
});

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
