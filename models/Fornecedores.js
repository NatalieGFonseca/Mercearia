const Fornecedores = (sequelize, DataTypes) => {
    return sequelize.define('Fornecedores', {
        nome: DataTypes.STRING,
        telefone: DataTypes.INTEGER,
        email: DataTypes.STRING,
        tipo: DataTypes.STRING
    });
}

module.exports = Fornecedores;