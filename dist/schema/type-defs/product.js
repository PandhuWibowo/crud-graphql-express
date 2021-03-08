"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalProductType = exports.ProductType = void 0;
const graphql_1 = require("graphql");
exports.ProductType = new graphql_1.GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        product_id: { type: graphql_1.GraphQLID },
        brand_id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        picture: { type: graphql_1.GraphQLString },
        price: { type: graphql_1.GraphQLFloat }
    })
});
exports.TotalProductType = new graphql_1.GraphQLObjectType({
    name: 'TotalProduct',
    fields: () => ({
        total: { type: graphql_1.GraphQLInt }
    })
});
