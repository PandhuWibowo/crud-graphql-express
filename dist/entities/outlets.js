"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outlets = void 0;
const typeorm_1 = require("typeorm");
const brands_1 = require("./brands");
let Outlets = class Outlets extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Outlets.prototype, "outlet_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Outlets.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Outlets.prototype, "picture", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Outlets.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ type: "float", precision: 10, scale: 6 }),
    __metadata("design:type", Number)
], Outlets.prototype, "longitude", void 0);
__decorate([
    typeorm_1.Column({ type: "float", precision: 10, scale: 6 }),
    __metadata("design:type", Number)
], Outlets.prototype, "latitude", void 0);
__decorate([
    typeorm_1.ManyToOne(() => brands_1.Brands, (brand) => brand.brand_id),
    typeorm_1.JoinColumn({ name: 'brand_id' }),
    __metadata("design:type", brands_1.Brands)
], Outlets.prototype, "brand_id", void 0);
Outlets = __decorate([
    typeorm_1.Entity()
], Outlets);
exports.Outlets = Outlets;
