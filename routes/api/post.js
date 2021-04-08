const router = require("express").Router();
const postsController = require("../../controllers/postController");
const parser = require("../../config/middleware/cloudinary.config");

// Matches with "/api/posts/image"
router.post("/image", parser.single("image"), postsController.UploadImage);


// Matches with "/api/posts"
router.route("/")
    .get(postsController.findAll)
    .post(postsController.create);

// Matches with "/api/posts/:id"
router
    .route("/:id")
    .get(postsController.findById)
    .put(postsController.update)
    .delete(postsController.remove);

module.exports = router;