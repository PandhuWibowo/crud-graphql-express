"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandType = void 0;
const graphql_1 = require("graphql");
exports.BrandType = new graphql_1.GraphQLObjectType({
    name: 'Brand',
    fields: () => ({
        brand_id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        logo: { type: graphql_1.GraphQLString },
        banner: { type: graphql_1.GraphQLString },
    })
});
