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
exports.clientData = exports.ClientData = void 0;
const mongoose = require('mongoose');
const CustomError_1 = require("../errors/CustomError");
const BaseDataBase_1 = require("./BaseDataBase");
class ClientData extends BaseDataBase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.getClients = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const clientModel = mongoose.model('clients', this.ClientSchema);
                return clientModel.find({})
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
        this.addClient = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const clientModel = mongoose.model('clients', this.ClientSchema);
                const newClient = new clientModel(data);
                newClient.save((error) => {
                    if (error) {
                        const { statusCode, message } = error;
                        throw new CustomError_1.CustomError(statusCode, message);
                    }
                    else {
                        console.log('Client data has been saved!!', data);
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
exports.ClientData = ClientData;
exports.clientData = new ClientData();
