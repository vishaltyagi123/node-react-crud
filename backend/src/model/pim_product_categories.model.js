module.exports = (sequelize, Sequelize) => {

return sequelize.define("pim_product_categories", {
    id_product_category	: {
    	type: Sequelize.INTEGER,
    	autoIncrement: true,
        primaryKey: true
    },
    id_catetory: {
       type: Sequelize.INTEGER
    },
    id_product: {
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