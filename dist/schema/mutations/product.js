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
exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
const graphql_1 = require("graphql");
const message_1 = require("../type-defs/message");
const brands_1 = require("../../entities/brands");
const products_1 = require("../../entities/products");
// Create new product
exports.createProduct = {
    type: message_1.MessageType,
    args: {
        name: { type: graphql_1.GraphQLString },
        picture: { type: graphql_1.GraphQLString },
        price: { type: graphql_1.GraphQLFloat },
        brand_id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, picture, price, brand_id } = args;
            try {
                const brand = yield brands_1.Brands.findOne(brand_id);
                if (brand === undefined || !brand)
                    throw new Error("Brand name should exists");
                const outlet = yield products_1.Products.findOne({ name });
                if (outlet !== undefined)
                    throw new Error('Product name has been exists');
                yield products_1.Products.insert({
                    name, picture, price, brand_id
                });
                return { response: 'OK', message: `Product of ${name} successfully created` };
            }
            catch (error) {
                console.error(error);
                throw new Error(error);
            }
        });
    }
};
// Update product
exports.updateProduct = {
    type: message_1.MessageType,
    args: {
        product_id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        picture: { type: graphql_1.GraphQLString },
        price: { type: graphql_1.GraphQLFloat },
        brand_id: { type: graphql_1.GraphQLID }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { product_id, name, picture, price, brand_id } = args;
            try {
                const brand = yield brands_1.Brands.findOne(brand_id);
                if (brand === undefined || !brand)
                    throw new Error("Brand name should exists");
                const product = yield products_1.Products.findOne(product_id);
                if (product === undefined || !product)
                    throw new Error("Product name not found");
                else {
                    yield products_1.Products.update({ product_id }, {
                        name,
                        picture,
                        price,
                        brand_id
                    });
                    return { response: 'OK', message: `Product of ${name} successfully updated` };
                }
            }
            catch (error) {
                console.error(error);
                throw new Error(error);
            }
        });
    }
};
// Delete product
exports.deleteProduct = {
    type: message_1.MessageType,
    args: {
        product_id: { type: graphql_1.GraphQLID }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { product_id } = args;
            try {
                yield products_1.Products.delete(product_id);
                return { response: 'OK', message: `Product id ${product_id} successfully deleted` };
            }
            catch (error) {
                console.error(error);
                throw new Error(error);
            }
        });
    }
};
