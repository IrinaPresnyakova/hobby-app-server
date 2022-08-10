module.exports = (sequelize, DataTypes) => {

    const BucketList = sequelize.define("BucketList", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        notes: {
            type: DataTypes.TEXT, 
            allowNull: true,
        }
    });
    
    // BucketList.sync({}).then(()=> {
    //     return BucketList.bulkCreate([
    //         {
    //             title: "Sewing"
    //         },
    //         {
    //             title: "Archery"
    //         },
    //         {
    //             title: "Diving"
    //         }
    //     ])    
    // }).then ((data) => {
    //     console.log(data);
        
    // }).catch((err) =>{
    //     console.log(err);
    // });

    return BucketList;
}