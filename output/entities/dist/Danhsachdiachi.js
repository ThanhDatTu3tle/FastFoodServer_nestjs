"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Danhsachdiachi = void 0;
var typeorm_1 = require("typeorm");
var Chitietdonhang_1 = require("./Chitietdonhang");
var Khachhang_1 = require("./Khachhang");
// @Index("PK__DANHSACH__EB61213ECC96A57E", ["maDiaChi"], { unique: true })
var Danhsachdiachi = /** @class */ (function () {
    function Danhsachdiachi() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaDiaChi", length: 10 })
    ], Danhsachdiachi.prototype, "maDiaChi");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "DiaChi", length: 50 })
    ], Danhsachdiachi.prototype, "diaChi");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "TenDiaChi", length: 50 })
    ], Danhsachdiachi.prototype, "tenDiaChi");
    __decorate([
        typeorm_1.OneToMany(function () { return Chitietdonhang_1.Chitietdonhang; }, function (chitietdonhang) { return chitietdonhang.maDiaChi; })
    ], Danhsachdiachi.prototype, "chitietdonhangs");
    __decorate([
        typeorm_1.ManyToOne(function () { return Khachhang_1.Khachhang; }, function (khachhang) { return khachhang.danhsachdiachis; }),
        typeorm_1.JoinColumn([{ name: "MaKhachHang", referencedColumnName: "maKhachHang" }])
    ], Danhsachdiachi.prototype, "maKhachHang");
    Danhsachdiachi = __decorate([
        typeorm_1.Entity("DANHSACHDIACHI", { schema: "dbo" })
    ], Danhsachdiachi);
    return Danhsachdiachi;
}());
exports.Danhsachdiachi = Danhsachdiachi;
