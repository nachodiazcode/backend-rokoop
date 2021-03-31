import {connect } from 'mongoose'

const UrlProd = "mongodb+srv://admin:<User_Admin1>@cluster0.zojpg.mongodb.net/rokoop_db?retryWrites=true&w=majority" ;
const UrlDev = "mongodb://localhost:27017/photo-gallery-db";

export async function startConnection(){
    await connect(UrlProd, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })    

    console.log('Database is connected')
}

