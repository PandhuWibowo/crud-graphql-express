"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const brand_1 = require("./queries/brand");
const outlet_1 = require("./queries/outlet");
const brand_2 = require("./mutations/brand");
const outlet_2 = require("./mutations/outlet");
const product_1 = require("./mutations/product");
const product_2 = require("./queries/product");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getBrands: brand_1.getBrands,
        getOutlets: outlet_1.getOutlets,
        getProducts: product_2.getProducts,
        getTotalProducts: product_2.getTotalProducts
    }
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createBrand: brand_2.createBrand,
        deleteBrand: brand_2.deleteBrand,
        updateBrand: brand_2.updateBrand,
        createOutlet: outlet_2.createOutlet,
        updateOutlet: outlet_2.updateOutlet,
        deleteOutlet: outlet_2.deleteOutlet,
        createProduct: product_1.createProduct,
        updateProduct: product_1.updateProduct,
        deleteProduct: product_1.deleteProduct
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
