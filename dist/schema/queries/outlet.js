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
exports.getOutlets = void 0;
const graphql_1 = require("graphql");
const outlet_1 = require("../type-defs/outlet");
const outlets_1 = require("../../entities/outlets");
const helper_1 = require("../../utils/helper");
exports.getOutlets = {
    type: new graphql_1.GraphQLList(outlet_1.OutletType),
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            const outlets = yield outlets_1.Outlets.find();
            /**
             * Source Google Maps
             * https://www.google.co.id/maps/place/Monumen+Nasional/@-6.1753871,106.8249641,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f5d2e764b12d:0x3d2ad6e1e0e9bcc8!8m2!3d-6.1753924!4d106.8271528
             */
            const monasLat = -6.1753871;
            const monasLong = 106.8249641;
            const outletsLongLat = [];
            for (const outlet of outlets) {
                outlet.distance = helper_1.calcCrow(monasLat, monasLong, outlet.latitude, outlet.longitude);
            }
            outlets.sort((a, b) => a.distance - b.distance);
            return outlets;
        });
    }
};
