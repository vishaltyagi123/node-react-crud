module.exports = (sequelize, Sequelize) => {

return sequelize.define("movies", {
	title: {
	    type: Sequelize.STRING
	},
	description: {
	    type: Sequelize.STRING
	},
	published: {
	    type: Sequelize.BOOLEAN
	}
}, {
  freezeTableName: true
})
}