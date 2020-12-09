"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDataBase = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
class BaseDataBase {
    constructor() {
        this.connection = mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this.Schema = mongoose.Schema;
        this.ProductSchema = new this.Schema({
            _id: String,
            photo: String,
            name: String,
            price: Number,
        });
        this.ClientSchema = new this.Schema({
            _id: String,
            name: String,
        });
        this.SaleSchema = new this.Schema({
            _id: String,
            timeStamp: String,
            product: {
                _id: String,
                photo: String,
                name: String,
                price: Number,
            },
            client: {
                _id: String,
                name: String,
            },
            qtt: Number,
            totalPrice: Number
        });
    }
}
exports.BaseDataBase = BaseDataBase;
exports.default = new BaseDataBase();
