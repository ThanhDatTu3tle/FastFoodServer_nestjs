"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Monan = void 0;
var typeorm_1 = require("typeorm");
var Danhmucyeuthich_1 = require("./Danhmucyeuthich");
var Donghoadon_1 = require("./Donghoadon");
// import { Danhmuc } from "./Danhmuc";
// @Index("PK__MONAN__DA2046AD92DB159C", ["maMonAn", "maDanhMuc"], {
//   unique: true,
// })
var Monan = /** @class */ (function () {
    function Monan() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaMonAn", length: 10 })
    ], Monan.prototype, "maMonAn");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "TenMonAn", nullable: true, length: 50 })
    ], Monan.prototype, "tenMonAn");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "ChiTiet", nullable: true, length: 100 })
    ], Monan.prototype, "chiTiet");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "HinhAnhMonAn", nullable: true, length: 250 })
    ], Monan.prototype, "hinhAnhMonAn");
    __decorate([
        typeorm_1.Column("decimal", {
            name: "SoLuong",
            nullable: true,
            precision: 10,
            scale: 0
        })
    ], Monan.prototype, "soLuong");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "MonAnKem", nullable: true, length: 50 })
    ], Monan.prototype, "monAnKem");
    __decorate([
        typeorm_1.Column("decimal", {
            name: "GiaTien",
            nullable: true,
            precision: 18,
            scale: 0
        })
    ], Monan.prototype, "giaTien");
    __decorate([
        typeorm_1.Column("decimal", {
            name: "GiaGoc",
            nullable: true,
            precision: 18,
            scale: 0
        })
    ], Monan.prototype, "giaGoc");
    __decorate([
        typeorm_1.Column("decimal", {
            name: "GiamGia",
            nullable: true,
            precision: 18,
            scale: 0
        })
    ], Monan.prototype, "giamGia");
    __decorate([
        typeorm_1.Column("bit", { name: "YeuThich", nullable: true })
    ], Monan.prototype, "yeuThich");
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaDanhMuc", length: 50 })
    ], Monan.prototype, "maDanhMuc");
    __decorate([
        typeorm_1.OneToMany(function () { return Danhmucyeuthich_1.Danhmucyeuthich; }, function (danhmucyeuthich) { return danhmucyeuthich.monan; })
    ], Monan.prototype, "danhmucyeuthiches");
    __decorate([
        typeorm_1.OneToMany(function () { return Donghoadon_1.Donghoadon; }, function (donghoadon) { return donghoadon.monan; })
    ], Monan.prototype, "donghoadons");
    Monan = __decorate([
        typeorm_1.Entity("MONAN", { schema: "dbo" })
    ], Monan);
    return Monan;
}());
exports.Monan = Monan;
