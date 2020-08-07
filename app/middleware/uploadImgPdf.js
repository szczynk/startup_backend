const path = require('path'); // for getting file extension
const multer = require('multer'); // for uploading files
const uuidv4 = require('uuidv4');

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "image") {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb("Please upload only images.", false);
    }
  } else {
    if (
      file.mimetype === 'application/pdf' ||
      file.mimetype === 'application/msword' ||
      file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) { // check file type to be pdf, doc, or docx
      cb(null, true);
    } else {
      cb("Please upload only word or pdf.", false); // else fails
    }
  }
};

const videoFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("video")) {
    cb(null, true);
  } else {
    cb("Please upload only videos.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "image") {
      cb(null, __basedir + 'assets/uploads/image');
    } else if (file.fieldname === "video") {
      cb(null, __basedir + 'assets/uploads/video');
    } else { 
      cb(null, __basedir + 'assets/uploads/docs');
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}-${uuidv4()}-${path.extname(file.originalname)}`);
  },
});

var uploadImgPdf = multer({ storage: storage, fileFilter: fileFilter });
var uploadVideo = multer({ storage: storage, fileFilter: videoFilter });

module.exports = { uploadImgPdf, uploadVideo };