const db = require("../model/indexx")
const Sequelize = require("sequelize")
const { Op } = Sequelize;

const Categories         = db.pim_categories_data
const ProductCategories  = db.pim_product_categories
const Product            = db.pim_flat_catalog
const Attributes         = db.pim_product_attribute
const AttributesValue    = db.pim_product_attribute_value
const Gallery            = db.pim_product_gallery

Product.hasMany(Gallery, { 
    as: "gallery",
    foreignKey: 'id_product'
});

Gallery.belongsTo(Product, {
    as: "gallery", 
    foreignKey: "id_product"
});

Product.belongsToMany(Categories, { 
    as: 'products', 
    through: ProductCategories,
    foreignKey: 'id_catetory'
});

Categories.belongsToMany(Product, { 
    as: 'products', 
    through: ProductCategories,
    foreignKey: 'id_product'
});

Attributes.hasMany(AttributesValue, { 
    as: 'value', 
    foreignKey: 'id_product_attribute' 
});
AttributesValue.belongsTo(Attributes);

Attributes.hasMany(AttributesValue, { 
    as: 'options', 
    foreignKey: 'id_product_attribute' 
});
AttributesValue.belongsTo(Attributes);


module.exports = {
    getAllCategory: async (req, res, next) => {
        await Categories.findAndCountAll({
            attributes : ["id_category","name","url_key","status","position","store","created_at"]
        }).then(category => res.json({
            count: category.count, 
            category: category.rows 
        })).catch(error => { 
            return next(error);
        })
    },

    /** Get Category Data */
    getCategoryProduct: async (req, res, next) => {
        let page  = (req.query.page) ? req.query.page : 1;
        let limit = (req.query.count)? req.query.count: 12;
        const offset = (page-1)*limit;
        const productArray = [];

        await Categories.findOne({ 
            where: {
                url_key: req.query.url_key
            },
            include: [{
                model: Product,
                as: "products",
                attributes: ['id_product', 'sku','url_key','meta_title','meta_description','image','product_type','color','fynd_uid'],
                through: {
                    attributes: []
                },
                required : true,
            }]
        }).then(async function(results){
            if(results){
                results.products.forEach(function (item) {
                    productArray.push(item.id_product)
                })
            }

            const filterAttributes = new Promise((resolve, reject) => {
                if(results != null){
                    const filterAttributes = Attributes.findAll({
                        where: { 
                            is_in_filter: 'yes'
                        },
                        attributes : [['label','filter_lable'],'code'],
                        include: [{
                            model: AttributesValue,
                            as: 'options',
                            attributes : ['value',['value', 'value_key']],
                            where: { 
                                id_product: productArray,
                            },
                        }],
                        group: ['value'],
                    })
                    if(!filterAttributes){
                        reject('Error While Processsing Your Request');
                    }
                    resolve(filterAttributes);
                } else {
                    resolve();
                }
            });

            const sortAttributes = new Promise((resolve, reject) => {
                if(results != null){
                    const sortAttributes = Attributes.findAll({
                        where: { 
                            is_in_sort: 'yes',
                        },
                        attributes : ['label','code'],
                        include: [{
                            model: AttributesValue,
                            as: 'options',
                            attributes : [],
                            where: { 
                                id_product: productArray,
                            },
                        }]
                    })
                    if(!sortAttributes) reject('Error While Processsing Your Request')
                    resolve(sortAttributes)
                } else {
                    resolve()
                }
            });

            Promise.all([
                filterAttributes, sortAttributes
            ]).then((attributes) => {
                var QueryResponse = {"success": 0, "success_message": "", "error": "1", "error_message": "Result Not Found"}
                if(results){
                    var QueryResponse = {"success": 1, "success_message": "success", "error": "0", "error_message": ""}
                }

                if(results){
                    results.dataValues.filters = attributes[0]
                    results.dataValues.sort = attributes[1]
                }

                res.send({ 
                    "response": QueryResponse, 
                    "query": req.query, 
                    "result": results 
                });
            })
        }).catch(error => {
            return next(error);
        })
    },
  
    /** Get Product Data */
    getProductData: async(req, res, next) => {
        await Product.findOne({
            where: { url_key: req.params.url_key },
            include: [{
                model: Gallery,
                as: 'gallery',
                attributes : ['position','image'],
            }],
        }).then(async function(data) {
            const productArrayAttribute = [];
            return await new Promise((resolve, reject) => {
                if(data != null){
                    const filterAttributes = Attributes.findAll({
                        where: { 
                            is_in_filter: 'yes'
                        },
                        attributes : ['label','code'],
                        raw: true,
                        include: [{
                            model: AttributesValue,
                            as: 'value',
                            attributes : ["value"],
                            where: { 
                                id_product: data.dataValues.id_product,
                            },
                        }],
                        group: ['value'],
                    })
                    if(!filterAttributes) {
                        reject('Error While Processsing Your Request');
                    }
                    resolve(filterAttributes);
                } else{
                    resolve();
                }
            }).then(async function (attribute){
                const sizeVariation  = new Promise((resolve, reject ) => {
                    if(data != null){
                        const sizeVariation = Product.findAll({
                            where: { 
                                fynd_uid: data.dataValues.fynd_uid,
                                id_product: {
                                    [Op.ne]: data.dataValues.id_product
                                }
                            },
                            attributes : ['id_product','sku','url_key','image','color','fynd_uid','fynd_size'],
                        })
                        if(!sizeVariation){
                            reject('Error While Processsing Your Request')
                        }
                        resolve(sizeVariation);
                    } else {
                        resolve();
                    }
                });

                const colorVariation = new Promise((resolve, reject ) => {
                    if(data != null){
                        const colorVariation = Product.findAll({
                            where: { 
                                fynd_uid: data.dataValues.fynd_uid,
                                color: {
                                    [Op.ne]: data.dataValues.color
                                }
                            },
                            attributes : ['id_product','sku','url_key','image','color','fynd_uid'],
                        })
                        if(!colorVariation) reject('Error While Processsing Your Request')
                        resolve(colorVariation);
                    } else {
                        resolve();
                    }
                });

                Promise.all([
                    sizeVariation, colorVariation
                ]).then((variations) => {
                    var Queryresponse = {"success": 0, "success_message": "", "error": "1", "error_message": "Result Not Found"}
                    if(data){
                        var Queryresponse = {"success": 1, "success_message": "success", "error": "0", "error_message": ""}
                    }
                    if(data != null){
                        data.dataValues.visible_attributes = attribute
                        data.dataValues.size_variation     = variations[0];
                        data.dataValues.color_variation    = variations[1];
                    }
                    res.json({
                        "response": Queryresponse,
                        "query": req.params, 
                        "result": data
                    });
                })
            })
        }).catch(error => {
            return next(error);
        })
    },
}
