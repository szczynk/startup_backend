const fs = require("fs");

const db = require("../models");
const Image = db.images;
const Video = db.video;
const Docs = db.docs;

const uploadImage = async (req, res) => {
    try {
        console.log(req.file);

        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }

        Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                __basedir + 'assets/uploads/image/' + req.file.filename
            ),
        }).then((image) => {
            fs.writeFileSync(
                __basedir + 'assets/uploads/image/tmp' + image.name,
            image.data
            );
    
            return res.send(`File has been uploaded.`);
        });        
        
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload : ${error}`);
    }
};

const uploadVideo = async (req, res) => {
    try {
        console.log(req.file);

        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }

        Video.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                __basedir + '/assets/uploads/video/' + req.file.filename
            ),
        }).then((_Video) => {
            fs.writeFileSync(
                __basedir + '/assets/uploads/video/tmp' + _Video.name,
            _Video.data
            );
    
            return res.send(`File has been uploaded.`);
        });       
        
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload : ${error}`);
    }
};

const uploadDocs = async (req, res) => {
    try {
        console.log(req.file);

        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }

        Docs.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                __basedir + '/assets/uploads/docs/' + req.file.filename
            ),
        }).then((_docs) => {
            fs.writeFileSync(
                __basedir + '/assets/uploads/docs/tmp' + _docs.name,
            _docs.data
            );
    
            return res.send(`File has been uploaded.`);
        });
        
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload : ${error}`);
    }
};

module.exports = {
    uploadImage,
    uploadVideo,
    uploadDocs,
};