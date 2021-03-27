const router = require("express").Router();
const postRoutes = require("./post");
const userRoutes = require("./user")

// routes
router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router;