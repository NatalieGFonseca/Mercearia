module.exports = (sequelize, DataTypes) => {
    const Venda = sequelize.define('Venda', {
        valor: DataTypes.FLOAT,
        data: DataTypes.DATE
    }, {});
    Venda.associate = function (models) {
        Venda.belongsTo(models.Funcionario, { foreignKey: 'id_funcionario' })
    };
    return Venda;
}