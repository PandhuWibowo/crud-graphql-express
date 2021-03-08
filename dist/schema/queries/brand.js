"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrands = void 0;
const graphql_1 = require("graphql");
const brand_1 = require("../type-defs/brand");
const brands_1 = require("../../entities/brands");
exports.getBrands = {
    type: new graphql_1.GraphQLList(brand_1.BrandType),
    resolve() {
        return brands_1.Brands.find();
    }
};
