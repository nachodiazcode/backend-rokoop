"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
require('dotenv').config();
const index_1 = __importDefault(require("./routes/index"));
app.set('port', process.env.PORT);
app.set('aws_access_key_id', process.env.aws_access_key_id);
app.set('aws_secret_key', process.env.aws_secret_access_key);
// middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(cors_1.default());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//call public folder
app.use(express_1.default.static(path_1.default.resolve(__dirname + './../public')));
//routes
app.use('/', index_1.default);
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
