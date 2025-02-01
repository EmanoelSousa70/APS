const express = require('express');
const router = express.Router();

// Definindo a rota POST para login
router.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

    // Removendo espaços em branco extras
    const usuarioTrim = usuario?.trim();
    const senhaTrim = senha?.trim();

    console.log(`Tentativa de login: Usuário - ${usuarioTrim}`);

    // Checando as credenciais (login fixo)
    if (usuarioTrim === 'funci001' && senhaTrim === '32118351') {
        return res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
        return res.status(401).json({ message: 'Credenciais inválidas!' });
    }
});

module.exports = router;