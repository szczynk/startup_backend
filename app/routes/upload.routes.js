const uploadFile = require("../middleware/uploadFile");
const controller = require("../controllers/upload.controller");

// var cpUpload = uploadFile.fields([{ name: 'image'}, { name: 'video'}, { name: 'docs'}])

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.post(
    "/api/auth/uploadimg",
    uploadFile.single('image'),
    controller.uploadImage);

  app.post(
    "/api/auth/uploadvd",
    uploadFile.single('video'),
    controller.uploadVideo);

  app.post(
    "/api/auth/uploaddoc",
    uploadFile.single('docs'),
    controller.uploadDocs);
};
