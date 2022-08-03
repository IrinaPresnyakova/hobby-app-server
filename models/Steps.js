// the following created  a table in the database

module.exports = (sequelize, DataTypes) => {

    const Steps = sequelize.define("Steps", {
        stepsBody: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    });
    return Steps;
}