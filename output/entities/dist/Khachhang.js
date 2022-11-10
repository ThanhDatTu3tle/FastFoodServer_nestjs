"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Khachhang = void 0;
var typeorm_1 = require("typeorm");
var Chitietdonhang_1 = require("./Chitietdonhang");
var Danhsachdiachi_1 = require("./Danhsachdiachi");
var Monanyeuthich_1 = require("./Monanyeuthich");
var Ykienkhachhang_1 = require("./Ykienkhachhang");
// @Index("PK__KHACHHAN__A9D1053566452320", ["email"], { unique: true })
var Khachhang = /** @class */ (function () {
    function Khachhang() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "Email", length: 50 })
    ], Khachhang.prototype, "email");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "HoTen", length: 50 })
    ], Khachhang.prototype, "hoTen");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "SoDienThoai", length: 10 })
    ], Khachhang.prototype, "soDienThoai");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "MatKhau", length: 50 })
    ], Khachhang.prototype, "matKhau");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "HinhAnh", length: 250 })
    ], Khachhang.prototype, "hinhAnh");
    __decorate([
        typeorm_1.OneToMany(function () { return Chitietdonhang_1.Chitietdonhang; }, function (chitietdonhang) { return chitietdonhang.email; })
    ], Khachhang.prototype, "chitietdonhangs");
    __decorate([
        typeorm_1.OneToMany(function () { return Danhsachdiachi_1.Danhsachdiachi; }, function (danhsachdiachi) { return danhsachdiachi.email; })
    ], Khachhang.prototype, "danhsachdiachis");
    __decorate([
        typeorm_1.OneToMany(function () { return Monanyeuthich_1.Monanyeuthich; }, function (monanyeuthich) { return monanyeuthich.email; })
    ], Khachhang.prototype, "monanyeuthiches");
    __decorate([
        typeorm_1.OneToMany(function () { return Ykienkhachhang_1.Ykienkhachhang; }, function (ykienkhachhang) { return ykienkhachhang.email; })
    ], Khachhang.prototype, "ykienkhachhangs");
    Khachhang = __decorate([
        typeorm_1.Entity("KHACHHANG", { schema: "dbo" })
    ], Khachhang);
    return Khachhang;
}());
exports.Khachhang = Khachhang;
