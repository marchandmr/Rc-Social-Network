const router = require("express").Router();
const postRoutes = require("./post");
const userRoutes = require("./user");



// routes
router.use("/posts", postRoutes);
router.use("/user", userRoutes);


module.exports = router;