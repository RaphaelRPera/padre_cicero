"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleRouter = exports.clientRouter = exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const ClientController_1 = require("../controller/ClientController");
const ProductController_1 = require("../controller/ProductController");
const SaleController_1 = require("../controller/SaleController");
exports.productRouter = express_1.default.Router();
exports.productRouter.get('/all', ProductController_1.productController.getProducts);
exports.productRouter.post('/add', ProductController_1.productController.addProduct);
exports.clientRouter = express_1.default.Router();
exports.clientRouter.get('/all', ClientController_1.clientController.getClients);
exports.clientRouter.post('/add', ClientController_1.clientController.addClient);
exports.saleRouter = express_1.default.Router();
exports.saleRouter.get('/all', SaleController_1.saleController.getSales);
exports.saleRouter.post('/add', SaleController_1.saleController.addSale);
