"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const graphql_1 = require("graphql");
const product_1 = require("../type-defs/product");
const products_1 = require("../../entities/products");
exports.getProducts = {
    type: new graphql_1.GraphQLList(product_1.ProductType),
    resolve() {
        return products_1.Products.find();
    }
};
