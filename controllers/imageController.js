// const  db  = require("../models/");
// const ImageSchema = require("../models/fileUpload");

// module.exports.UploadImage = async (req, res) => {
//     const imageUploaded = new ImageSchema({
//         image: req.file.path,
//     });

//     try {
//         await imageUploaded.save();
//     } catch (error){
//         return res.status(400).json({
//             message: `image upload failed, check to see the ${error}`,
//             status: "error",
//         });
//     }
// };

// module.exports = {
//     UploadImage: function (req, res) {
//         db.Post
//             .create({image: req.file.path})
//             .then(dbModel => res.json(dbModel))            
//             .catch(err => res.status(400).json(err))
//     }
// }