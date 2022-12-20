module.exports = (sequelize, Sequelize) => {
    return sequelize.define("pim_product_attribute_value", {
        id_product_attribute_value	: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_product: {
           type: Sequelize.INTEGER
        },
        id_product_attribute:{
            type: Sequelize.INTEGER
        },
        value: {
            type: Sequelize.STRING(100)
        },
        value_type_integer:{
            type: Sequelize.INTEGER
        },
        value_type_float:{
            type: Sequelize.Sequelize.INTEGER
        }, 
        value_type_text:{
            type: Sequelize.TEXT
        }, 
        value_type_timestamp:{
            type: Sequelize.INTEGER
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