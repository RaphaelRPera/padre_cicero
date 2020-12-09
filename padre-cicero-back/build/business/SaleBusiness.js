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
exports.saleBusiness = exports.SaleBusiness = void 0;
const SaleData_1 = require("../data/SaleData");
const CustomError_1 = require("../errors/CustomError");
const services_1 = require("../services/services");
class SaleBusiness {
    constructor() {
        this.getSale = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const sales = yield SaleData_1.saleData.getSales();
                return sales;
            }
            catch (error) {
                const { statusCode, message } = error;
                throw new CustomError_1.CustomError(statusCode, message);
            }
        });
        this.addSale = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { product, qtt, client } = data;
                const prodId = product._id;
                if (!product._id) {
                    throw new CustomError_1.CustomError(400, 'Product ID is required');
                }
                if (!product.photo) {
                    throw new CustomError_1.CustomError(400, 'Product photo is required');
                }
                if (!product.name) {
                    throw new CustomError_1.CustomError(400, 'Product name is required');
                }
                if (!product.price) {
                    throw new CustomError_1.CustomError(400, 'Product price is required');
                }
                if (!qtt) {
                    throw new CustomError_1.CustomError(400, 'Sale quantity is required');
                }
                if (!client._id) {
                    throw new CustomError_1.CustomError(400, 'Client ID is required');
                }
                if (!client.name) {
                    throw new CustomError_1.CustomError(400, 'Client name is required');
                }
                const totalPrice = product.price * qtt;
                const _id = services_1.services.generateId();
                const timeStamp = Date.now();
                const sale = {
                    _id,
                    timeStamp,
                    product: {
                        _id: product._id,
                        photo: product.photo,
                        name: product.name,
                        price: product.price,
                    },
                    client: {
                        _id: client._id,
                        name: client.name,
                    },
                    qtt,
                    totalPrice
                };
                yield SaleData_1.saleData.addSale(sale);
            }
            catch (error) {
                const { statusCode, message } = error;
                throw new CustomError_1.CustomError(statusCode, message);
            }
        });
    }
}
exports.SaleBusiness = SaleBusiness;
exports.saleBusiness = new SaleBusiness();
