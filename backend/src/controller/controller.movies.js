const db = require("../model/indexx")
const Sequelize = require("sequelize")
const Op = Sequelize.Op;
const Movies = db.movies

module.exports = {
    getAllMovies : async (req, res, next) => {
        await Movies.findAll({
            attributes: { exclude: ['published','updatedAt']}
        })
        .then( movies => res.json(movies))
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while retrieving form table"
            })
        })
    },

    getMoviesById: async (req, res, next) => {
        await Movies.findOne({ where: { id: 1 }})
        .then( movie => res.json(movie))
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while retrieving form table"
            })
        })
    },


    getAllByQuery: async (req, res, next) => {
        await Movies.findAndCountAll({ where: { description: { [Op.like]: 'best%' }}, offset: 0, limit: 10 })
        .then( movies  => res.json({
            count: movies.count,
            rows: movies.rows
        }))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving form table"
            })
        })
    },

    saveMovies : async (req, res, next) => {
        if (!req.body.title || !req.body.description) {
            res.status(400).json({
                message: "All fields are required"
            })
        }

        const MoviesDetals = {
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        }

        Movies.create(MoviesDetals)
        .then(data => {
            res.json(data)
        }).catch( err => res.status(500).json({
            message: err.message || "Some error occurred while creating the Movies"
        }))
    }
}


//await Project.findAndCountAll({ where: { title: "best "}, offset: 10, limit: 2 });