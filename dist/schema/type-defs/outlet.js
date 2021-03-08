"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutletType = void 0;
const graphql_1 = require("graphql");
exports.OutletType = new graphql_1.GraphQLObjectType({
    name: 'Outlet',
    fields: () => ({
        outlet_id: { type: graphql_1.GraphQLID },
        brand_id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        picture: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        longitude: { type: graphql_1.GraphQLFloat },
        latitude: { type: graphql_1.GraphQLFloat }
    })
});
