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
exports.clientController = exports.ClientController = void 0;
const ClientBusiness_1 = require("../business/ClientBusiness");
class ClientController {
    constructor() {
        this.getClients = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield ClientBusiness_1.clientBusiness.getClients();
                res.status(200).send(clients);
            }
            catch (error) {
                const { statusCode, message } = error;
                res.status(statusCode || 400).send({ message });
            }
        });
        this.addClient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const client = { name };
                yield ClientBusiness_1.clientBusiness.addClient(client);
                res.status(200).send({ message: `Client successfully added` });
            }
            catch (error) {
                const { statusCode, message } = error;
                res.status(statusCode || 400).send({ message });
            }
        });
    }
}
exports.ClientController = ClientController;
exports.clientController = new ClientController();
