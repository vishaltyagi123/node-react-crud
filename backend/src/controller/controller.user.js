const createError  = require("http-errors");
const db = require("../model/indexx");
const Sequelize = require("sequelize");
const { Op } = Sequelize;

const Customer = db.customer;

module.exports = {
    getAllCustomer: async (req, res, next) => {
        try {
            const users = await Customer.findAndCountAll();
            if(!users) throw createError.NotFound('No User Found !');
            res.json({count: users.count, users: users.rows});
        } catch (error) {
            return next(error);
        }
    },

    searchByName : async (req, res, next) => {
        try {
            const data = await Customer.findAndCountAll({
                where: {
                    full_name: { [Op.like]: `%${req.params.keyword}%`}
                }
            });
            if(!data) throw createError.NotFound(`${req.body.search} is not available!`);
            res.json({ data: data, success: true });
        } catch (error) {
            return next(error);
        }
    },

    customeCreateRequest : async(req, res, next) => {
        try {
            const isCustomerExist = await Customer.findOne({where: {email: req.body.email}});
            if (isCustomerExist) {
                throw createError.Conflict(`${req.body.email} is already registered!`);
            } else {
                const user = await Customer.create({
                    full_name: req.body.full_name,
                    email: req.body.email,
                    phone: req.body.phone
                });
                if(user) res.json({ success:true, message: "New User Created!", user: user });
            }
        } catch (error) {
            return next(error);
        }
    },

    getCustomerById: async (req, res, next) => {
        try {
            const user = await Customer.findByPk(req.params.id);
            if(!user)throw createError.NotFound("User Not Found!");
            res.json({user});
        } catch (error) {
            return next(error);
        }
    },

    customerUpdateRequest : async(req, res, next) => {
        try {
            const users =  await Customer.update(
                {full_name :req.body.full_name, email :req.body.email, phone: req.body.phone },
                {where :{id :req.body.id}
            });
            if(!users)throw createError.NotFound("User Not Found!");
            res.json({success: true, message: "User Updated!"});
        } catch (error) {
            return next(error);
        }
    },

    customerDeleteRequest : async (req, res, next) => {
        try {
            const isExist = await Customer.findOne({where: {id: req.body.id}});
            if(!isExist) throw createError.NotFound("User Not Found!");
            const isUserDeleted = await isExist.destroy();
            if(isUserDeleted) res.json({isUserDeleted: isUserDeleted, success: true , message : "User deleted"});
        } catch (error) {
            return next(error);
        }
    }
}
