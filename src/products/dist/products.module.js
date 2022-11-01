"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsModule = void 0;
var common_1 = require("@nestjs/common");
var products_service_1 = require("./products.service");
var products_controller_1 = require("./products.controller");
var typeorm_1 = require("@nestjs/typeorm");
var Monan_1 = require("../../output/entities/Monan");
var Danhmuc_1 = require("output/entities/Danhmuc");
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([Monan_1.Monan, Danhmuc_1.Danhmuc])],
            controllers: [products_controller_1.ProductsController],
            providers: [products_service_1.ProductsService]
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
