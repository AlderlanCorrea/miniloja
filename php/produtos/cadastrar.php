<?php

require_once "../conexao.php";

$dados = json_decode(file_get_contents("php://input"), true);

$nome = $dados["nome"];
$categoria_id = $dados["categoria_id"];
$preco = $dados["preco"];
$estoque = $dados["estoque"];

if (empty($nome)) {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "O nome do produto é obrigatório"
    ]);
    exit;
}

if (empty($categoria_id)) {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "A categoria é obrigatória"
    ]);
    exit;
}

if (empty($preco)) {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "O preço do produto é obrigatório"
    ]);
    exit;
}

if (empty($estoque)) {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "O estoque do produto é obrigatório"
    ]);
    exit;
}


if (!isset($preco) || !is_numeric($preco) || $preco <= 0) {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "O preço deve ser um número maior que zero"
    ]);
    exit;
}


$sql = "INSERT INTO produtos
        (nome, categoria_id, preco, estoque)
        VALUES (?, ?, ?, ?)";

$stmt = $conexao->prepare($sql);

$stmt->bind_param(
    "sidi",
    $nome,
    $categoria_id,
    $preco,
    $estoque
);

$stmt->execute();

header("Content-Type: application/json");

echo json_encode([
    "sucesso" => true,
    "mensagem" => "Produto cadastrado com sucesso"
]);
