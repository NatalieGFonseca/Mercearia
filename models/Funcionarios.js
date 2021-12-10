module.exports = (sequelize, DataTypes) => {
    const Funcionario = sequelize.define('Funcionario', {
        cpf: DataTypes.STRING,
        nome: DataTypes.STRING,
        telefone: DataTypes.STRING,
        funcao: DataTypes.STRING,
        rua: DataTypes.STRING,
        bairro: DataTypes.STRING,
        data_nascimento: DataTypes.DATE
    }, {});
    return Funcionario;
}