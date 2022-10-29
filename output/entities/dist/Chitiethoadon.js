"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Chitiethoadon = void 0;
var typeorm_1 = require("typeorm");
var Chitietdonhang_1 = require("./Chitietdonhang");
var Monan_1 = require("./Monan");
// @Index("PK__CHITIETH__B11716254CF96877", ["maMonAn"], { unique: true })
var Chitiethoadon = /** @class */ (function () {
    function Chitiethoadon() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { name: "MaChiTietHoaDon", length: 10 })
    ], Chitiethoadon.prototype, "maChiTietHoaDon");
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaMonAn", length: 10 })
    ], Chitiethoadon.prototype, "maMonAn");
    __decorate([
        typeorm_1.Column("int", { name: "SoLuongMonAn" })
    ], Chitiethoadon.prototype, "soLuongMonAn");
    __decorate([
        typeorm_1.ManyToOne(function () { return Chitietdonhang_1.Chitietdonhang; }, function (chitietdonhang) { return chitietdonhang.chitiethoadons; }),
        typeorm_1.JoinColumn([
            { name: "MaChiTietDonHang", referencedColumnName: "maChiTietDonHang" },
        ])
    ], Chitiethoadon.prototype, "maChiTietDonHang");
    __decorate([
        typeorm_1.OneToOne(function () { return Monan_1.Monan; }, function (monan) { return monan.chitiethoadon; }),
        typeorm_1.JoinColumn([{ name: "MaMonAn", referencedColumnName: "maMonAn" }])
    ], Chitiethoadon.prototype, "maMonAn2");
    Chitiethoadon = __decorate([
        typeorm_1.Entity("CHITIETHOADON", { schema: "dbo" })
    ], Chitiethoadon);
    return Chitiethoadon;
}());
exports.Chitiethoadon = Chitiethoadon;
