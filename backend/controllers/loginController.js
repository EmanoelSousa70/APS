// Controlador de login
const loginController = (req, res) => {
    const { usuario, senha } = req.body;

    // Valide o login com o usuário e senha
    if (usuario === 'funci001' && senha === '32118351') {
        // Se o login for bem-sucedido, retorne um status 200
        res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
        // Se as credenciais forem inválidas, retorne um status 400
        res.status(400).json({ message: 'Credenciais inválidas. Tente novamente!' });
    }
};

module.exports = loginController;
