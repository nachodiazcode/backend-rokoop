import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors';

import fs from 'fs';

const app = express()

import indexRoutes from './routes/index'

// settings
app.set('port', process.env.PORT ||  4000) ;

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


//routes
app.use('/api', indexRoutes);
app.use('/uploads', express.static(path.resolve('uploads')))


export default app ;