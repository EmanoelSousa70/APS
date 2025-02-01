// config/database.js
const { Sequelize } = require('sequelize');

// Criando a conexão com o banco SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

// Exportando a conexão para ser usada nos modelos
module.exports = sequelize;




