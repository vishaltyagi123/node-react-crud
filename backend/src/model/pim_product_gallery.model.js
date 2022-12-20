module.exports = (sequelize, Sequelize) => {
    return sequelize.define("pim_product_gallery", {
        id_product_gallery: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_product: {
           type: Sequelize.INTEGER
        },
        position: {
            type: Sequelize.INTEGER
        },
        image:{
            type: Sequelize.TEXT,
            allowNull: true
        },
        created_at:{
            type: Sequelize.DATE
        },
        updated_at:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.DataTypes.NOW,
        }, 
    },{
        freezeTableName: true,
        timestamps: false
    })}