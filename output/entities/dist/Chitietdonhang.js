"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Chitietdonhang = void 0;
var typeorm_1 = require("typeorm");
var Khachhang_1 = require("./Khachhang");
var Danhsachdiachi_1 = require("./Danhsachdiachi");
var MonanDonhang_1 = require("./MonanDonhang");
// @Index("PK__CHITIETD__4B0B45DD0DD6F11D", ["maChiTietDonHang"], { unique: true })
var Chitietdonhang = /** @class */ (function () {
    function Chitietdonhang() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaChiTietDonHang", length: 10 })
    ], Chitietdonhang.prototype, "maChiTietDonHang");
    __decorate([
        typeorm_1.Column("time", { name: "GioDat" })
    ], Chitietdonhang.prototype, "gioDat");
    __decorate([
        typeorm_1.Column("smalldatetime", { name: "NgayDat" })
    ], Chitietdonhang.prototype, "ngayDat");
    __decorate([
        typeorm_1.Column("float", { name: "ThanhTien", precision: 53 })
    ], Chitietdonhang.prototype, "thanhTien");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "MaGiamGia", length: 10 })
    ], Chitietdonhang.prototype, "maGiamGia");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "TrangThai", length: 50 })
    ], Chitietdonhang.prototype, "trangThai");
    __decorate([
        typeorm_1.ManyToOne(function () { return Khachhang_1.Khachhang; }, function (khachhang) { return khachhang.chitietdonhangs; }),
        typeorm_1.JoinColumn([{ name: "Email", referencedColumnName: "email" }])
    ], Chitietdonhang.prototype, "email");
    __decorate([
        typeorm_1.ManyToOne(function () { return Danhsachdiachi_1.Danhsachdiachi; }, function (danhsachdiachi) { return danhsachdiachi.chitietdonhangs; }),
        typeorm_1.JoinColumn([{ name: "MaDiaChi", referencedColumnName: "maDiaChi" }])
    ], Chitietdonhang.prototype, "maDiaChi");
    __decorate([
        typeorm_1.OneToMany(function () { return MonanDonhang_1.MonanDonhang; }, function (monanDonhang) { return monanDonhang.maChiTietDonHang2; })
    ], Chitietdonhang.prototype, "monanDonhangs");
    Chitietdonhang = __decorate([
        typeorm_1.Entity("CHITIETDONHANG", { schema: "dbo" })
    ], Chitietdonhang);
    return Chitietdonhang;
}());
exports.Chitietdonhang = Chitietdonhang;
