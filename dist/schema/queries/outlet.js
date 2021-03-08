"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOutlets = void 0;
const graphql_1 = require("graphql");
const outlet_1 = require("../type-defs/outlet");
const outlets_1 = require("../../entities/outlets");
exports.getOutlets = {
    type: new graphql_1.GraphQLList(outlet_1.OutletType),
    resolve() {
        return outlets_1.Outlets.find();
    }
};
