import { Request, Response } from 'express'
import path from 'path'
import fs from 'fs-extra'

import Photo from './../models/Photo'

export async function getApiHome(req: Request, res: Response): Promise<Response> {

    return res.status(200).send('esto esta funcioando')

}

export async function getPhotos(req: Request, res: Response): Promise<Response> {

    const photos = await Photo.find()
    return res.json(photos)

}

export async function getPhoto(req: Request, res: Response): Promise<Response> {
     
    const { id } = req.params;
    const photo =  await Photo.findById(id);
   
    return res.json(photo);
 
}

export async function createPhoto(req: any, res: Response): Promise<Response> {
    try {
        const { title, description } = req.body;

        // Verificar si req.file existe
        if (!req.file) {
            return res.status(400).json({ message: 'No file provided' });
        }

        const newPhoto = {
            title: title,
            description: description,
            imagePath: req.file.location
        }

        const photo = new Photo(newPhoto);
        await photo.save();

        return res.json({
            message: 'Photo successfully saved',
            photo
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function deletePhoto(req: Request, res: Response): Promise < Response > {
    
    const { id } = req.params ;
    const photo = await Photo.findByIdAndRemove(id);
    return res.json({
        message: 'Photo Deleted',
        photo
    })

}

export async function updatePhoto(req: Request, res: Response): Promise<Response>{
    
    const { id } = req.params;
    const { title, description } = req.body;

    console.log(req.body)

    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    }, { new: true });

    return res.json({
        ok: true,
        message: 'Successfully Updated',
        updatedPhoto
    })

}