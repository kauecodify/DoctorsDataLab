const { application } = require("express");

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('formCadastro');
    var mensagemSenha = document.getElementById('mensagemSenha');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var senha = document.getElementById('senha').value;
        var confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

        if (senha.trim() !== confirmacaoSenha.trim()) {
            mensagemSenha.innerHTML = 'As senhas não são iguais.';
        } else if (senha.length < 8) {
            mensagemSenha.innerHTML = 'A senha deve ter pelo menos 8 caracteres.';
        } else if (!senha.match(/[a-z]/) || !senha.match(/[A-Z]/) || !senha.match(/[0-9]/) || !senha.match(/[^a-zA-Z0-9]/)) {
            mensagemSenha.innerHTML = 'A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais.';
        } else {
            mensagemSenha.innerHTML = '';

            //AJAX
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'script.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // Tratar a resposta do servidor, se necessário
                    console.log(xhr.responseText);
                }
            };
            xhr.send('senha=' + encodeURIComponent(senha)); // Envie a senha para o script PHP

            // cria um objeto FormData para enviar os dados do formulário
            var formData = new FormData(form);

            // cria o objeto XMLHttpRequest
            var xhr = new XMLHttpRequest();

            // configurar a requisição
            xhr.open('POST', 'script.php');

            // define o cabeçalho necessário para enviar os dados de formulário
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            // retorna a chamada quando a requisição estiver concluída
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // Exibir a resposta do servidor
                    console.log(xhr.responseText);
                }
            };

            // envia a requisição com os dados do formulário
            xhr.send(formData);

            var dados = {
                tipo:"valor_tipo",
                nome: "valor_nome",
                email: "valor_email",
                senha: "valor_senha"
            };

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:8080/api/receptorData");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log(xhr.responseText);
                }
            };
            xhr.send(JSON.stringify(dados));
        }
    });
});