require('dotenv').config();

module.exports = {
    HOST: process.env.HOST,
    USER: "admin",
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect : process.env.DIALECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}


// USER: 'ballypmusr',
// PASSWORD: 'weyryehehh',
// DB: 'ballypimdb',
// dialect : 'mysql',



// DB_DATABASE=ballycrtdb
// DB_USERNAME=ballycrtusr
// DB_PASSWORD=sdfjksdhfdh