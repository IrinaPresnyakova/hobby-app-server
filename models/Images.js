// the following created  a table in the database

module.exports = (sequelize, DataTypes) => {

    const Images = sequelize.define("Images", {
        public_id: {
            type: DataTypes.STRING,
            allowNull: true,
        }, 
    });
    
    return Images;
}