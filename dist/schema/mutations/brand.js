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
exports.deleteBrand = exports.updateBrand = exports.createBrand = void 0;
const graphql_1 = require("graphql");
const brand_1 = require("../type-defs/brand");
const message_1 = require("../type-defs/message");
const brands_1 = require("../../entities/brands");
// Create new brand
exports.createBrand = {
    type: brand_1.BrandType,
    args: {
        name: { type: graphql_1.GraphQLString },
        logo: { type: graphql_1.GraphQLString },
        banner: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, logo, banner } = args;
            try {
                const brand = yield brands_1.Brands.findOne({
                    name
                });
                if (brand !== undefined)
                    throw new Error("Brand name is exist");
                yield brands_1.Brands.insert({
                    name, logo, banner
                });
                return args;
            }
            catch (error) {
                console.error(error);
                throw new Error(error);
            }
        });
    }
};
// Update brand
exports.updateBrand = {
    type: message_1.MessageType,
    args: {
        name: { type: graphql_1.GraphQLString },
        logo: { type: graphql_1.GraphQLString },
        banner: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, logo, banner } = args;
            try {
                const brand = yield brands_1.Brands.findOne({
                    name
                });
                if (brand === undefined || !brand)
                    throw new Error("Brand name not found");
                else {
                    yield brands_1.Brands.update({ name }, {
                        logo,
                        banner
                    });
                    return { response: 'OK', message: `Brand of ${name} successfully updated` };
                }
            }
            catch (error) {
                console.error(error);
                throw new Error(error);
            }
        });
    }
};
// Delete brand
exports.deleteBrand = {
    type: message_1.MessageType,
    args: {
        brand_id: { type: graphql_1.GraphQLID }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { brand_id } = args;
            try {
                yield brands_1.Brands.delete(brand_id);
                return { response: 'OK', message: `Brand id ${brand_id} successfully deleted` };
            }
            catch (error) {
                console.error(error);
                throw new Error(error);
            }
        });
    }
};
