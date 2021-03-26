const router = require("express").Router();
const postRoutes = require("./post");

// post routes
router.use("/post", postRoutes);

module.exports = router;