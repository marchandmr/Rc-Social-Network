const router = require("express").Router();
const post = require("../../controllers/post");

// Matches with "/api/post"
router.route("/")
    .get(post.findAll)
    .post(post.create);

// Matches with "/api/post/:id"
router
    .route("/:id")
    .get(post.findById)
    .put(post.update)
    .delete(post.remove);

module.exports = router;