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
var Danhmuc_1 = require("./Danhmuc");
var MonanDonhang_1 = require("./MonanDonhang");
var MonanNguyenlieu_1 = require("./MonanNguyenlieu");
var Monanyeuthich_1 = require("./Monanyeuthich");
// @Index("PK__MONAN__B1171625C1226914", ["maMonAn"], { unique: true })
var Monan = /** @class */ (function () {
    function Monan() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaMonAn", length: 10 })
    ], Monan.prototype, "maMonAn");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "TenMonAn", length: 50 })
    ], Monan.prototype, "tenMonAn");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "HinhAnhMonAn", length: 250 })
    ], Monan.prototype, "hinhAnhMonAn");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "MoTaChiTiet", length: 250 })
    ], Monan.prototype, "moTaChiTiet");
    __decorate([
        typeorm_1.Column("float", { name: "GiaTien", precision: 53 })
    ], Monan.prototype, "giaTien");
    __decorate([
        typeorm_1.Column("bit", { name: "YeuThich" })
    ], Monan.prototype, "yeuThich");
    __decorate([
        typeorm_1.ManyToOne(function () { return Danhmuc_1.Danhmuc; }, function (danhmuc) { return danhmuc.monans; }),
        typeorm_1.JoinColumn([{ name: "MaDanhMuc", referencedColumnName: "maDanhMuc" }])
    ], Monan.prototype, "maDanhMuc");
    __decorate([
        typeorm_1.OneToMany(function () { return MonanDonhang_1.MonanDonhang; }, function (monanDonhang) { return monanDonhang.maMonAn2; })
    ], Monan.prototype, "monanDonhangs");
    __decorate([
        typeorm_1.OneToMany(function () { return MonanNguyenlieu_1.MonanNguyenlieu; }, function (monanNguyenlieu) { return monanNguyenlieu.maMonAn2; })
    ], Monan.prototype, "monanNguyenlieus");
    __decorate([
        typeorm_1.OneToMany(function () { return Monanyeuthich_1.Monanyeuthich; }, function (monanyeuthich) { return monanyeuthich.maMonAn; })
    ], Monan.prototype, "monanyeuthiches");
    Monan = __decorate([
        typeorm_1.Entity("MONAN", { schema: "dbo" })
    ], Monan);
    return Monan;
}());
exports.Monan = Monan;
