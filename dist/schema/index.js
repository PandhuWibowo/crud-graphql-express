"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const brand_1 = require("./queries/brand");
const brand_2 = require("./mutations/brand");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getBrands: brand_1.getBrands
    }
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createBrand: brand_2.createBrand,
        deleteBrand: brand_2.deleteBrand,
        updateBrand: brand_2.updateBrand
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
