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
exports.getProducts = exports.getTotalProducts = void 0;
const graphql_1 = require("graphql");
const product_1 = require("../type-defs/product");
const products_1 = require("../../entities/products");
exports.getTotalProducts = {
    type: product_1.TotalProductType,
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield products_1.Products.find();
            return { total: products.length };
        });
    }
};
exports.getProducts = {
    type: new graphql_1.GraphQLList(product_1.ProductType),
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            return products_1.Products.find();
        });
    }
};
