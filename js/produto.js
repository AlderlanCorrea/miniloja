fetch("php/produtos/listar.php")
    .then(resposta => resposta.json())
    .then(produtos => {
        fetch("php/produtos/listar.php")
    .then(resposta => resposta.json())
    .then(produtos => {

        const listaProdutos = document.getElementById("lista-produtos");

        produtos.forEach(produto => {

            const div = document.createElement("div");
            div.classList.add("card-produto");

            div.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>Categoria: ${produto.categoria}</p>
                <p>Preço: R$ ${produto.preco}</p>
                <p>Estoque: ${produto.estoque}</p>
            `;

            listaProdutos.appendChild(div);
        });

    })
    .catch(erro => {
        console.error("Erro:", erro);
    });
    })
    .catch(erro => {
        console.error("Erro:", erro);
    });