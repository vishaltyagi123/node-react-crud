const dbConfig = require("../config/db.config.js")
const Sequelize = require("sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

sequelize.authenticate()
.then(() => { console.log(' mysql connected!! ')})
.catch(err => console.log('connection error ' + err ));

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.movies                  = require("./tutorial.model")(sequelize, Sequelize)
db.pim_categories_data     = require("./pim_categories_data.model")(sequelize, Sequelize)
db.pim_product_categories  = require("./pim_product_categories.model")(sequelize, Sequelize)
db.pim_flat_catalog        = require("./pim_flat_catalog.model")(sequelize, Sequelize)
db.pim_product_attribute   = require("./pim_product_attribute.model")(sequelize, Sequelize)
db.pim_product_attribute_value = require("./pim_product_attribute_value.model")(sequelize, Sequelize)
db.pim_product_gallery     = require("./pim_product_gallery.model")(sequelize, Sequelize)
db.customer                = require("./user")(sequelize, Sequelize)

module.exports = db