module.exports = (sequelize, Sequelize) => {

return sequelize.define("pim_categories_data", {
    id_category: {
    	type: Sequelize.INTEGER,
    	autoIncrement: true,
        primaryKey: true
    },
    source_category_id: {
       type: Sequelize.INTEGER
    },
    parent_id: {
    	type: Sequelize.INTEGER
    },
    name: {
    	type: Sequelize.STRING(100)
    },
    description: {
    	type : Sequelize.STRING(100),
    	allowNull: true
    },
	url_key: {
	    type: Sequelize.STRING(100)
	},
	meta_title:{
	    type: Sequelize.TEXT,
	    allowNull: true
	},
	meta_description :{
	    type: Sequelize.TEXT,
	    allowNull: true
	},
	meta_keyword :{
	    type: Sequelize.TEXT,
	    allowNull: true
	},
	page_type :{
		type: Sequelize.STRING(100)
	},
	image :{
		type: Sequelize.STRING(100)
	},	
	mobile_image :{
	    type: Sequelize.STRING(100)
	},
	hero_content:{
	    type: Sequelize.STRING(100)
	},	
	bottom_content:{
	    type: Sequelize.STRING(100)
	},	
	is_images:{
	    type: Sequelize.STRING(100)
	}	,
	images_count:{
	    type: Sequelize.STRING(100)
	},	
	status:{
	    type: Sequelize.STRING(100)
	}	,	
	include_in_menu	:{
	    type: Sequelize.STRING(100)
	},
	position:{
	    type: Sequelize.INTEGER
	},
	landing_page:{
	    type: Sequelize.STRING(100)
	},
	breadcrumb:{
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