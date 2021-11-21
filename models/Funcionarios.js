const { Usuarios } = require('./Usuarios');

const Funcionarios = (sequelize, DataTypes) => {
    return sequelize.define('Funcionarios', {
        cpf: DataTypes.STRING,
        nome: DataTypes.STRING,
        telefone: DataTypes.INTEGER,
        funcao: DataTypes.STRING,
        rua: DataTypes.STRING,
        bairro: DataTypes.STRING,
        data_nascimento: DataTypes.DATE,
        id_user: {
            type: DataTypes.INTEGER,
            references: {
                model: "usuario",
                key: "id"
            }
        }
    });
}

Funcionarios.hasOne(Usuarios);

module.exports = Funcionarios;