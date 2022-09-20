const express = require("express");
const router = express.Router()
const productController = require("../controllers/productController");

router.get("/list", productController.list); // solicito la vista
router.get("/detail/:id", productController.detail); // solicito la vista de un producto identificado
router.get("/create", productController.create);
router.post("/create", productController.store);
router.get("/edit/:id", productController.edit);
router.put("/edit/:id", productController.update);

module.exports = router