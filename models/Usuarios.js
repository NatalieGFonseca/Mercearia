const Usuario = (sequelize, DataTypes) => {
    return sequelize.define('Usuario', {
        login: DataTypes.STRING,
        senha: DataTypes.STRING
    });
}

module.exports = Usuario;