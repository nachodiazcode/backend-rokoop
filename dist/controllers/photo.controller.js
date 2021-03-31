"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePhoto = exports.deletePhoto = exports.createPhoto = exports.getPhoto = exports.getPhotos = void 0;
const Photo_1 = __importDefault(require("./../models/Photo"));
async function getPhotos(req, res) {
    const photos = await Photo_1.default.find();
    return res.json(photos);
}
exports.getPhotos = getPhotos;
async function getPhoto(req, res) {
    const { id } = req.params;
    const photo = await Photo_1.default.findById(id);
    return res.json(photo);
}
exports.getPhoto = getPhoto;
async function createPhoto(req, res) {
    const { title, description } = req.body;
    console.log(req.file);
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.location
    };
    const photo = new Photo_1.default(newPhoto);
    await photo.save();
    return res.json({
        message: 'Photo successfully saved',
        photo
    });
    console.log(req.body);
    return res.json({
        messagge: 'photo is saved'
    });
}
exports.createPhoto = createPhoto;
async function deletePhoto(req, res) {
    const { id } = req.params;
    const photo = await Photo_1.default.findByIdAndRemove(id);
    return res.json({
        message: 'Photo Deleted',
        photo
    });
}
exports.deletePhoto = deletePhoto;
async function updatePhoto(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;
    console.log(req.body);
    const updatedPhoto = await Photo_1.default.findByIdAndUpdate(id, {
        title,
        description
    }, { new: true });
    return res.json({
        ok: true,
        message: 'Successfully Updated',
        updatedPhoto
    });
}
exports.updatePhoto = updatePhoto;
