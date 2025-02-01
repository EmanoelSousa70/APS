const express = require('express');
const pedidoController = require('../controllers/pedidoController'); // Importando o controller

const router = express.Router();

// Criar um novo pedido
router.post('/', pedidoController.criarPedido);

// Listar todos os pedidos
router.get('/', pedidoController.listarPedidos);

// Rota para atualizar o status do pedido
router.put('/:id', pedidoController.atualizarStatus);

module.exports = router;