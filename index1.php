<?php
$email = $_POST['email'];
$codigo = $_POST['codigo'];

if (strlen($codigo) === 5) {
    echo "Código válido para o e-mail: $email";
} else {
    echo "Código inválido para o e-mail: $email";
}
?>