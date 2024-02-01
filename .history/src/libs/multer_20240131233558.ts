import multer from 'multer'
import aws from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'

require('dotenv').config();

//llamamos a S3 
const multerS3 = require('multer-s3')

//configuramos s3
const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey:  process.env.S3_SECRET_KEY
});

const upload = multer({
  
  storage: multerS3({
    s3: s3,
    bucket: 'iddux-images',
    acl: 'public-read',
    metadata: function(req, file, cb) {
      cb(null, Object.assign({}, req.body));
    },
    key: function(req, file, cb) {
      cb(null, uuidv4() + file.originalname);
    }
  }),
  limits: { fileSize: Infinity },
  fileFilter: function(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|webp|avif|gif|bmp)$/i)) {
      return cb(new Error('Solo se permiten imágenes'));
    }
    cb(null, true);
  }
})


export default upload
