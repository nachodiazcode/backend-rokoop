import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors';

const app = express()

import indexRoutes from './routes/index'

app.set('port', process.env.PORT) ;
app.set('aws_access_key_id', process.env.aws_access_key_id);
app.set('aws_secret_key', process.env.aws_secret_access_key);


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

//call public folder
app.use(express.static(path.resolve(__dirname + './../public')));

//routes
app.use('/', indexRoutes);
app.use('/uploads', express.static(path.resolve('uploads')))

export default app ;