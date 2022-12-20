module.exports = (sequelize, Sequelize) => {
    return sequelize.define("pim_product_attribute", {
        id_product_attribute	: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        source_attribute_id: {
           type: Sequelize.INTEGER
        },
        code: {
            type: Sequelize.STRING(100)
        },
        label:{
            type: Sequelize.STRING(50)
        },
        is_in_filter:{
            type: Sequelize.Sequelize.ENUM("yes", "no"),
        }, 
        is_in_search:{
            type: Sequelize.Sequelize.ENUM("yes", "no"),
        }, 
        is_in_sort:{
            type: Sequelize.Sequelize.ENUM("yes", "no"),
        }, 
        is_visible:{
            type: Sequelize.Sequelize.ENUM("yes", "no"),
        }, 
        is_metrological:{
            type: Sequelize.Sequelize.ENUM("yes", "no"),
        }, 
        value_type:{
            type: Sequelize.Sequelize.ENUM("int","float","text","timestamp","varchar"),
        }, 
        position:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.INTEGER,
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