const Fornecedor = (sequelize, DataTypes) => {
    return sequelize.define('Fornecedor', {
        nome: DataTypes.STRING,
        telefone: DataTypes.INTEGER,
        email: DataTypes.STRING,
        tipo: DataTypes.STRING
    });
}

module.exports = Fornecedor;