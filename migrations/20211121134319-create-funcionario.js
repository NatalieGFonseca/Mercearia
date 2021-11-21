'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('funcionario', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      funcao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('funcionario');
  }
};