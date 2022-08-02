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
        notes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        materials: {
            type: DataTypes.TEXT,
            allowNull: false,
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
            allowNull: false,
        },
        reflection: {
            type: DataTypes.TEXT, 
            allowNull: true,
        }
    });

    Projects.associate = (models) => {
        Projects.hasMany(models.Steps, {
            onDelete: "cascade",
        })
    }
    return Projects;
}