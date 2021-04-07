import { Router } from 'express';
const router = Router();

import { getApiHome, createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto } from './../controllers/photo.controller'

import multer from './../libs/multer'

router.route('/')
    .get(getApiHome)

router.route('/photos') 
    .get(getPhotos)
    .post(multer.single('image'), createPhoto)
    
router.route('/photo/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)

export default router ;