export default (sequelize, DataType) => {
    return sequelize.define('users', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING(30),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
}