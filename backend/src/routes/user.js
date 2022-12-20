const express = require('express');
const router = express.Router();
const createError = require("http-errors");
const {
    getAllCustomer,
    getCustomerById,
    customerUpdateRequest,
    customerDeleteRequest,
    customeCreateRequest,
    searchByName
} = require("../controller/controller.user");

//customer routes
router.get("/", getAllCustomer);
router.get("/:id", getCustomerById);
router.put("/", customerUpdateRequest);
router.delete("/", customerDeleteRequest);
router.post("/create", customeCreateRequest);
router.get('/search', searchByName);


module.exports = router;

