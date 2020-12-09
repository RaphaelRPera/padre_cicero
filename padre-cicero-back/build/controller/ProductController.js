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
exports.productController = exports.ProductController = void 0;
const ProductBusiness_1 = require("../business/ProductBusiness");
class ProductController {
    constructor() {
        this.getProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield ProductBusiness_1.productBusiness.getProducts();
                res.status(200).send(products);
            }
            catch (error) {
                const { statusCode, message } = error;
                res.status(statusCode || 400).send({ message });
            }
        });
        this.addProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { photo, name, price } = req.body;
                const data = { photo, name, price };
                yield ProductBusiness_1.productBusiness.addProduct(data);
                res.status(200).send({ message: `Product successfully added` });
            }
            catch (error) {
                const { statusCode, message } = error;
                res.status(statusCode || 400).send({ message });
            }
        });
    }
}
exports.ProductController = ProductController;
exports.productController = new ProductController();
