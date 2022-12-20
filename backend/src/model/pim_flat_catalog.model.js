module.exports = (sequelize, Sequelize) => {

return sequelize.define("pim_flat_catalog", {
    id_product: {
    	type: Sequelize.INTEGER,
    	autoIncrement: true,
        primaryKey: true
    },
    source_product_id: {
       type: Sequelize.INTEGER
    },
    parent_id: {
    	type: Sequelize.INTEGER
    },
    sku: {
    	type: Sequelize.STRING(100)
    },
    name: {
    	type : Sequelize.STRING(100),
    	allowNull: true
    },
	price: {
	    type: Sequelize.STRING(100)
	},
	selling_price:{
	    type: Sequelize.TEXT,
	    allowNull: true
	},
	discount :{
	    type: Sequelize.TEXT,
	    allowNull: true
	},
	stock_status :{
	    type: Sequelize.TEXT,
	    allowNull: true
	},
	quantity :{
		type: Sequelize.STRING(100)
	},
	status :{
		type: Sequelize.STRING(100)
	},	
	url_key :{
	    type: Sequelize.STRING(100)
	},
	visibility:{
	    type: Sequelize.STRING(100)
	},	
	description:{
	    type: Sequelize.STRING(100)
	},	
	image:{
	    type: Sequelize.STRING(100)
	}	,
	fynd_size:{
	    type: Sequelize.STRING(100)
	},	
	fynd_uid:{
	    type: Sequelize.STRING(100)
	}	,	
	group_id	:{
	    type: Sequelize.STRING(100)
	},
	promotional_tags:{
	    type: Sequelize.INTEGER
	},
	is_trending:{
	    type: Sequelize.STRING(100)
	},
	cod_block:{
	    type: Sequelize.STRING(100)
	},
	size:{
		type: Sequelize.STRING(100)
	},
    color: {
        type: Sequelize.STRING(100)
	},
	store:{
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