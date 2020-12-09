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
exports.saleController = exports.SaleController = void 0;
const SaleBusiness_1 = require("../business/SaleBusiness");
class SaleController {
    constructor() {
        this.getSales = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const sales = yield SaleBusiness_1.saleBusiness.getSale();
                res.status(200).send(sales);
            }
            catch (error) {
                const { statusCode, message } = error;
                res.status(statusCode || 400).send({ message });
            }
        });
        this.addSale = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { product, qtt, client } = req.body;
                const sale = { product, qtt, client };
                yield SaleBusiness_1.saleBusiness.addSale(sale);
                res.status(200).send({ message: `Sale successfully added` });
            }
            catch (error) {
                const { statusCode, message } = error;
                res.status(statusCode || 400).send({ message });
            }
        });
    }
}
exports.SaleController = SaleController;
exports.saleController = new SaleController();
