"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Monanyeuthich = void 0;
var typeorm_1 = require("typeorm");
var Khachhang_1 = require("./Khachhang");
var Monan_1 = require("./Monan");
// @Index("PK__MONANYEU__DDD505B927514E92", ["maMonAnYeuThich"], { unique: true })
var Monanyeuthich = /** @class */ (function () {
    function Monanyeuthich() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaMonAnYeuThich", length: 10 })
    ], Monanyeuthich.prototype, "maMonAnYeuThich");
    __decorate([
        typeorm_1.ManyToOne(function () { return Khachhang_1.Khachhang; }, function (khachhang) { return khachhang.monanyeuthiches; }),
        typeorm_1.JoinColumn([{ name: "MaKhachHang", referencedColumnName: "maKhachHang" }])
    ], Monanyeuthich.prototype, "maKhachHang");
    __decorate([
        typeorm_1.ManyToOne(function () { return Monan_1.Monan; }, function (monan) { return monan.monanyeuthiches; }),
        typeorm_1.JoinColumn([{ name: "MaMonAn", referencedColumnName: "maMonAn" }])
    ], Monanyeuthich.prototype, "maMonAn");
    Monanyeuthich = __decorate([
        typeorm_1.Entity("MONANYEUTHICH", { schema: "dbo" })
    ], Monanyeuthich);
    return Monanyeuthich;
}());
exports.Monanyeuthich = Monanyeuthich;
