import multer from 'multer'
import aws from 'aws-sdk'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'
import dotenv from 'dotenv' ;

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
    acl: 'public-read',
    dirname:'/',
    bucket: 'galleryblog',
  
    metadata: function (req:any, file:any, cb:any) {
      cb(null, Object.assign({},req.body));
    },
    key: function (req:any, file:any, cb:any) {
      cb(null, uuidv4() + path.basename(file.originalname));
    },
    filename: (req:any, file:any,cb:any)=>{
      cb(null, `${file.filename} ${Date.now()}.${file.mimetype.split('/')[1]}`);
    }
    
  })
})


export default upload
