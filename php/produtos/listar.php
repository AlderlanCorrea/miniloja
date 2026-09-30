<?php

require_once "../conexao.php";

$sql = "
    SELECT
        produtos.id,
        produtos.nome,
        categorias.nome AS categoria,
        produtos.preco,
        produtos.estoque,
        produtos.ativo,
        produtos.criado_em
    FROM produtos
    INNER JOIN categorias
        ON produtos.categoria_id = categorias.id
";

$resultado = $conexao->query($sql);

$produtos = [];

while ($produto = $resultado->fetch_assoc()) {
    $produtos[] = $produto;
}

header("Content-Type: application/json");

echo json_encode($produtos);