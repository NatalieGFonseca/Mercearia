const Usuarios = (sequelize, DataTypes) => {
    return sequelize.define('Usuarios', {
        login: DataTypes.STRING,
        senha: DataTypes.STRING
    });
}

module.exports = Usuarios;