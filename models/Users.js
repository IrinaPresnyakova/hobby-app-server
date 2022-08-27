// the following created  a table in the database

module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
       
    });

    Users.associate = (models) => {
        Users.hasMany(models.Projects, {
            onDelete: "cascade",
        })
    }
    
    return Users;
}