// the following created  a table in the database

module.exports = (sequelize, DataTypes) => {

    const Projects = sequelize.define("Projects", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        started: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        finish_by: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        materials: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        budget: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        steps: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        progress: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        reflection: {
            type: DataTypes.TEXT, 
            allowNull: true,
        },
        archived: {
            type: DataTypes.STRING,
            defaultValue: "active",
            allowNull: false
        }, 
        bucketList: {
            type: DataTypes.STRING,
            defaultValue: "active",
            allowNull: false
        }, 
        // username: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }       
    });

    Projects.associate = (models) => {
        Projects.hasMany(models.Notes, {
            onDelete: "cascade",
        })
    }
    return Projects;
}