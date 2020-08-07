const path = require('path'); // for getting file extension
const multer = require('multer'); // for uploading files
const uuidv4 = require('uuidv4');

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "image") {
  if ( 
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } 
  else {
    cb("Please upload only images.", false);
  }
  } 
  else if (file.fieldname === "video") {
    if (
        file.mimetype === 'video/mp4' ||
        file.mimetype === 'video/x-flv'
    ) {
      cb(null, true);
    } else {
      cb("Please upload only videos.", false);
    }
  }
  else {
    if (
      file.mimetype === 'application/pdf' ||
      file.mimetype === 'application/msword' ||
      file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) { // check file type to be pdf, doc, or docx
      cb(null, true);
    } 
    else {
      cb("Please upload only word or pdf.", false); // else fails
    }
  }
};


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "image") {
      cb(null, __basedir + '/assets/uploads/image/');
    } 
    else if (file.fieldname === "video") {
      cb(null, __basedir + '/assets/uploads/video/');
    } 
    else { 
      cb(null, __basedir + '/assets/uploads/docs/');
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: fileFilter });

module.exports = uploadFile;