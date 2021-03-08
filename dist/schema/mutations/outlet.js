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
exports.deleteOutlet = exports.updateOutlet = exports.createOutlet = void 0;
const graphql_1 = require("graphql");
const message_1 = require("../type-defs/message");
const brands_1 = require("../../entities/brands");
const outlets_1 = require("../../entities/outlets");
// Create new outlet
exports.createOutlet = {
    type: message_1.MessageType,
    args: {
        name: { type: graphql_1.GraphQLString },
        picture: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        longitude: { type: graphql_1.GraphQLFloat },
        latitude: { type: graphql_1.GraphQLFloat },
        brand_id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, picture, address, longitude, latitude, brand_id } = args;
            try {
                const brand = yield brands_1.Brands.findOne(brand_id);
                if (brand === undefined || !brand)
                    throw new Error("Brand name should exists");
                const outlet = yield outlets_1.Outlets.findOne({ name });
                if (outlet !== undefined)
                    throw new Error('Outlet name has been exists');
                yield outlets_1.Outlets.insert({
                    name, picture, address, longitude, brand_id, latitude
                });
                return { response: 'OK', message: `Outlet of ${name} successfully created` };
            }
            catch (error) {
                console.error(error);
                throw new Error(error);
            }
        });
    }
};
// Update outlet
exports.updateOutlet = {
    type: message_1.MessageType,
    args: {
        outlet_id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        picture: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        longitude: { type: graphql_1.GraphQLFloat },
        latitude: { type: graphql_1.GraphQLFloat },
        brand_id: { type: graphql_1.GraphQLID }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { outlet_id, name, picture, address, longitude, latitude, brand_id } = args;
            try {
                const brand = yield brands_1.Brands.findOne(brand_id);
                if (brand === undefined || !brand)
                    throw new Error("Brand name should exists");
                const outlet = yield outlets_1.Outlets.findOne(outlet_id);
                if (outlet === undefined || !outlet)
                    throw new Error("Outlet name not found");
                else {
                    yield outlets_1.Outlets.update({ outlet_id }, {
                        name,
                        picture,
                        address,
                        longitude,
                        latitude,
                        brand_id
                    });
                    return { response: 'OK', message: `Outlet of ${name} successfully updated` };
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
exports.deleteOutlet = {
    type: message_1.MessageType,
    args: {
        outlet_id: { type: graphql_1.GraphQLID }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { outlet_id } = args;
            try {
                yield outlets_1.Outlets.delete(outlet_id);
                return { response: 'OK', message: `Outlet id ${outlet_id} successfully deleted` };
            }
            catch (error) {
                console.error(error);
                throw new Error(error);
            }
        });
    }
};
