"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
async function startConnection() {
    await mongoose_1.connect('mongodb://localhost:27017/photo-gallery-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('Database is connected');
}
exports.startConnection = startConnection;
