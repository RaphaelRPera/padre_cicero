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
exports.productBusiness = exports.ProductBusiness = void 0;
const ProductData_1 = require("../data/ProductData");
const CustomError_1 = require("../errors/CustomError");
const services_1 = require("../services/services");
class ProductBusiness {
    constructor() {
        this.getProducts = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield ProductData_1.productData.getProducts();
                return products;
            }
            catch (error) {
                const { statusCode, message } = error;
                throw new CustomError_1.CustomError(statusCode, message);
            }
        });
        this.addProduct = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { photo, name, price } = data;
                if (!photo) {
                    throw new CustomError_1.CustomError(400, `A photo URL is required`);
                }
                if (!name) {
                    throw new CustomError_1.CustomError(400, `A name is required`);
                }
                if (!price) {
                    throw new CustomError_1.CustomError(400, `A price is required`);
                }
                const _id = services_1.services.generateId();
                const product = { _id, photo, name, price };
                yield ProductData_1.productData.addProduct(product);
            }
            catch (error) {
                const { statusCode, message } = error;
                throw new CustomError_1.CustomError(statusCode, message);
            }
        });
    }
}
exports.ProductBusiness = ProductBusiness;
exports.productBusiness = new ProductBusiness();
