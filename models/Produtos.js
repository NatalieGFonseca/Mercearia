module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        nome: DataTypes.STRING,
        tipo: DataTypes.STRING,
        preco_unitario: DataTypes.FLOAT
    }, {});
    Produto.associate = function (models) {
        Produto.belongsTo(models.Fornecedor, { foreignKey: 'id_fornecedor' })
    }
    return Produto;
}