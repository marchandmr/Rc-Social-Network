const router = require("express").Router();
const postRoutes = require("./post");
const userRoutes = require("./user");
const imageRoute = require("./uploadImageRoute");


// routes
router.use("/posts", postRoutes);
router.use("/user", userRoutes);
router.use("/image", imageRoute);

module.exports = router;