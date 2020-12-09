"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router/router");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use('/products', router_1.productRouter);
app.use('/clients', router_1.clientRouter);
app.use('/sales', router_1.saleRouter);
app.listen(process.env.PORT || 3003, () => {
    console.log("Server running on port 3003");
});
