const express = require('express');
const router = express.Router();
const createError = require("http-errors");
const {
    getAllCategory, 
    getCategoryProduct,
    getProductData
} = require("../controller/controller.category");

router.get("/categories", getAllCategory);
router.get("/category", getCategoryProduct);
router.get("/product/:url_key", getProductData);

module.exports = router;

