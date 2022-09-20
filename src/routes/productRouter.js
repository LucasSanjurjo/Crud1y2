const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/img/imagenes-platos"));
  },
  filename: function (req, file, cb) {
    const newFilename = file.fieldname + Date.now() + "-" + path.extname(file.originalname);
    cb(null,newFilename );
  },
});

const upload = multer({ storage: storage });

router.get("/list", productController.list); // solicito la vista
router.get("/detail/:id", productController.detail); // solicito la vista de un producto identificado
router.get("/create", productController.create);
router.post("/create",upload.single("image"), productController.store);
router.get("/edit/:id", productController.edit);
router.put("/edit/:id", productController.update);
router.delete("/delete/:id", productController.destroy);

module.exports = router;
