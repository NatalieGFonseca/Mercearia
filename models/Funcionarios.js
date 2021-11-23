module.exports = (sequelize, DataTypes) => {
    const Funcionario = sequelize.define('Funcionario', {
        cpf: DataTypes.STRING,
        nome: DataTypes.STRING,
        telefone: DataTypes.INTEGER,
        funcao: DataTypes.STRING,
        rua: DataTypes.STRING,
        bairro: DataTypes.STRING,
        data_nascimento: DataTypes.DATE,
        id_user: DataTypes.INTEGER
    }, {});
    Funcionario.associate = function (models) {
        Funcionario.belongsTo(models.Usuario, { foreignKey: 'id_user' })
    }
    return Funcionario;
}