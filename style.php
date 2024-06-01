<?php

//receber dados
$dadosJson = file_get_contents('php://input');

//converter json para array PHP
$dados = json_decode($dadosJson, true);

//salva os dados no db
$tipo = $dados['tipo'];
$nome = $dados['nome'];
$email = $dados['email'];
$senha = $dados['senha'];

//enviar dados para springboot

//...

//mensagem de confirmação
echo json_encode(['mensagem' => 'Dados recebidos com sucesso']);
