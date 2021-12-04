module.exports = (sequelize, DataTypes) => {
    const Estoque = sequelize.define('Estoque', {
        
    }, {});
    Estoque.associate = function (models) {
        Estoque.belongsTo(models.Produto, { foreignKey: 'id_produto' })
    }
    return Estoque;
}