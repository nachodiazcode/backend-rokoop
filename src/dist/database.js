"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
const UrlProd = "mongodb+srv://admin:admin1234@cluster0.zojpg.mongodb.net/rokoop_db?retryWrites=true&w=majority";
const UrlDev = "mongodb://localhost:27017/photo-gallery-db";
async function startConnection() {
    await mongoose_1.connect(UrlProd, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('Database is connected');
}
exports.startConnection = startConnection;
