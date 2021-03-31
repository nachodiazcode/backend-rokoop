"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
//llamamos a S3 
const multerS3 = require('multer-s3');
//configuramos s3
const s3 = new aws_sdk_1.default.S3({
    secretAccessKey: 'q0kvS9bF2ZnR0Rkm+7LzI8iElylo1y1qU0wo6IxM',
    accessKeyId: 'AKIAVBZRGP25SB6GGJWD',
});
const upload = multer_1.default({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        dirname: '/',
        bucket: 'gallery.image1',
        metadata: function (req, file, cb) {
            cb(null, Object.assign({}, req.body));
        },
        key: function (req, file, cb) {
            cb(null, uuid_1.v4() + path_1.default.basename(file.originalname));
        },
        filename: (req, file, cb) => {
            cb(null, `${file.filename} ${Date.now()}.${file.mimetype.split('/')[1]}`);
        }
    })
});
exports.default = upload;
