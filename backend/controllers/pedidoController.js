const Pedido = require('../models/pedidoModel');

// Função para calcular o preço com base no tamanho da pizza
const calcularPreco = (tamanho) => {
    const precos = {
        Pequena: 25.00,
        Média: 35.00,
        Grande: 45.00
    };
    return precos[tamanho] || 0; // Retorna o preço de acordo com o tamanho, ou 0 se não encontrado
};

// Criar novo pedido
const criarPedido = async (req, res) => {
    try {
        const { nome, endereco, telefone, bairro, sabor, tamanho, quantidade, status } = req.body;

        // Verifica se todos os campos estão preenchidos
        if (!nome || !endereco || !telefone || !bairro || !sabor || !tamanho || !quantidade || !status) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
        }

        // Calcula o preço com base no tamanho
        const precoUnitario = calcularPreco(tamanho);
        const precoTotal = precoUnitario * quantidade; // Multiplica pelo número de unidades

        // Criando pedido no banco de dados
        const novoPedido = await Pedido.create({
            nome,
            endereco,
            telefone,
            bairro,
            sabor,
            tamanho,
            quantidade,
            preco: precoTotal, // Salva o valor total do pedido
            status
        });

        res.status(201).json(novoPedido);
    } catch (error) {
        console.error('Erro ao criar pedido:', error);
        res.status(500).json({ message: 'Erro ao criar o pedido: ' + error.message });
    }
};

// Obter todos os pedidos
const listarPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll(); // Correto para Sequelize
        res.json(pedidos);
    } catch (error) {
        console.error('Erro ao listar pedidos:', error);
        res.status(500).json({ message: 'Erro ao listar pedidos: ' + error.message });
    }
};

// Atualizar o status de um pedido
const atualizarStatus = async (req, res) => {
    try {
        const { id } = req.params;  // Recupera o ID do pedido
        const { status } = req.body;  // Novo status

        // Verifica se o status foi informado
        if (!status) {
            return res.status(400).json({ message: 'O status é obrigatório!' });
        }

        // Atualiza o status do pedido
        const pedido = await Pedido.findByPk(id);  // Busca o pedido pelo ID

        if (!pedido) {
            return res.status(404).json({ message: 'Pedido não encontrado!' });
        }

        // Atualiza o status
        pedido.status = status;
        await pedido.save();

        res.status(200).json({ message: `Status do pedido ${id} atualizado para ${status}` });
    } catch (error) {
        console.error('Erro ao atualizar o status do pedido:', error);
        res.status(500).json({ message: 'Erro ao atualizar o status do pedido: ' + error.message });
    }
};

module.exports = {
    criarPedido,
    listarPedidos,
    atualizarStatus  // Agora a função de atualizar o status está exportada
};
