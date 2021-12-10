module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        quantidade: DataTypes.INTEGER
    }, {});
    Item.associate = function (models) {
        Item.belongsTo(models.Produto, { foreignKey: 'id_produto' })
    };
    Item.associate = function (models) {
        Item.belongsTo(models.Venda, { foreignKey: 'id_venda'})
    }
    return Item;
}