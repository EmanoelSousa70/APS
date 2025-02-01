// models/pedidoModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Caminho relativo correto dentro do diretório backend

// Definindo o modelo Pedido
const Pedido = sequelize.define('Pedido', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sabor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tamanho: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: { // Novo campo para quantidade
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pendente'
    }
});

// Sincronizando a tabela com o banco de dados e garantindo a atualização correta
sequelize.sync({ alter: true })
    .then(() => console.log('📦 Banco de dados sincronizado!'))
    .catch(err => console.error('❌ Erro ao sincronizar o banco de dados:', err));

module.exports = Pedido;