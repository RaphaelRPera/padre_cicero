"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productData = exports.ProductData = void 0;
const mongoose = require('mongoose');
const CustomError_1 = require("../errors/CustomError");
const BaseDataBase_1 = require("./BaseDataBase");
class ProductData extends BaseDataBase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.getProducts = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const productModel = mongoose.model('products', this.ProductSchema);
                return productModel.find({})
                    .then((data) => {
                    return data;
                })
                    .catch((error) => {
                    throw new CustomError_1.CustomError(400, error.message);
                });
            }
            catch (error) {
                const { statusCode, message } = error;
                throw new CustomError_1.CustomError(statusCode, message);
            }
        });
        this.addProduct = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const productModel = mongoose.model('products', this.ProductSchema);
                const newProduct = new productModel(data);
                newProduct.save((error) => {
                    if (error) {
                        const { statusCode, message } = error;
                        throw new CustomError_1.CustomError(statusCode, message);
                    }
                    else {
                        console.log('Product data has been saved!!', data);
                    }
                });
            }
            catch (error) {
                const { statusCode, message } = error;
                throw new CustomError_1.CustomError(statusCode, message);
            }
        });
    }
}
exports.ProductData = ProductData;
exports.productData = new ProductData();
