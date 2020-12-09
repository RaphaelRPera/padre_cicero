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
exports.clientBusiness = exports.ClientBusiness = void 0;
const ClientData_1 = require("../data/ClientData");
const CustomError_1 = require("../errors/CustomError");
const services_1 = require("../services/services");
class ClientBusiness {
    constructor() {
        this.getClients = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield ClientData_1.clientData.getClients();
                return clients;
            }
            catch (error) {
                const { statusCode, message } = error;
                throw new CustomError_1.CustomError(statusCode, message);
            }
        });
        this.addClient = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = data;
                if (!name) {
                    throw new CustomError_1.CustomError(400, 'A name is required');
                }
                const _id = services_1.services.generateId();
                const client = { _id, name };
                yield ClientData_1.clientData.addClient(client);
            }
            catch (error) {
                const { statusCode, message } = error;
                throw new CustomError_1.CustomError(statusCode, message);
            }
        });
    }
}
exports.ClientBusiness = ClientBusiness;
exports.clientBusiness = new ClientBusiness();
