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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema_1 = require("./schema");
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const connection = require('./config/connection');
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection(connection.database);
    const app = express();
    app.use(cors_1.default());
    app.use(express.json());
    app.use('/graphql', graphqlHTTP({
        schema: schema_1.schema,
        graphiql: true,
    }));
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`SERVER RUNNING ON PORT ${PORT}`);
    });
});
main().catch((err) => {
    console.log(err);
});
