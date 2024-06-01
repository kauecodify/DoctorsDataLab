//Express e node.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 8080;

// middleware para analisar o corpo da requisição como JSON
app.use(bodyParser.json());

// requisição de enviar e-mail
app.post('/api/enviarEmail', (req, res) => {
    const { email, codigo } = req.body;

    // configurar o transporte do e-mail
    const transporter = nodemailer.createTransport({
        service: 'seu provedor de e-mail',
        auth: {
            user: 'seu-email@example.com',
            pass: 'sua-senha'
        }
    });

    // opções de e-mail
    const mailOptions = {
        from: 'seu-email@example.com',
        to: email,
        subject: 'Confirmação de Cadastro',
        text: `Seu código de confirmação é: ${codigo}`
    };

    // enviar o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erro ao enviar o e-mail de confirmação');
        } else {
            console.log('E-mail de confirmação enviado: ' + info.response);
            res.status(200).send('E-mail de confirmação enviado');
        }
    });
});

// inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
