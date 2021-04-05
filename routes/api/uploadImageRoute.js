const router = require("express").Router();
const { UploadImage } = require("../../controllers/imageController");
const parser = require("../../config/middleware/cloudinary.config");

router.post("/image", parser.single("image"), UploadImage);

module.exports = router;