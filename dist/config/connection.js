"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
require('dotenv').config();
const brands_1 = require("../entities/brands");
const outlets_1 = require("../entities/outlets");
const products_1 = require("../entities/products");
const database = {
    type: process.env.DATABASE_TYPE,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD || '',
    logging: false,
    synchronize: true,
    entities: [brands_1.Brands, outlets_1.Outlets, products_1.Products]
};
exports.database = database;
