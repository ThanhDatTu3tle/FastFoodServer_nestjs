"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MonanDonhang = void 0;
var typeorm_1 = require("typeorm");
var Monan_1 = require("./Monan");
var Chitietdonhang_1 = require("./Chitietdonhang");
// @Index("PK__MONAN_DO__75A7A278FA3954AC", ["maMonAn", "maChiTietDonHang"], {
//   unique: true,
// })
var MonanDonhang = /** @class */ (function () {
    function MonanDonhang() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaMonAn", length: 10 })
    ], MonanDonhang.prototype, "maMonAn");
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaChiTietDonHang", length: 10 })
    ], MonanDonhang.prototype, "maChiTietDonHang");
    __decorate([
        typeorm_1.Column("int", { name: "SoLuong" })
    ], MonanDonhang.prototype, "soLuong");
    __decorate([
        typeorm_1.Column("float", { name: "ThanhTien", precision: 53 })
    ], MonanDonhang.prototype, "thanhTien");
    __decorate([
        typeorm_1.ManyToOne(function () { return Monan_1.Monan; }, function (monan) { return monan.monanDonhangs; }),
        typeorm_1.JoinColumn([{ name: "MaMonAn", referencedColumnName: "maMonAn" }])
    ], MonanDonhang.prototype, "maMonAn2");
    __decorate([
        typeorm_1.ManyToOne(function () { return Chitietdonhang_1.Chitietdonhang; }, function (chitietdonhang) { return chitietdonhang.monanDonhangs; }),
        typeorm_1.JoinColumn([
            { name: "MaChiTietDonHang", referencedColumnName: "maChiTietDonHang" },
        ])
    ], MonanDonhang.prototype, "maChiTietDonHang2");
    MonanDonhang = __decorate([
        typeorm_1.Entity("MONAN_DONHANG", { schema: "dbo" })
    ], MonanDonhang);
    return MonanDonhang;
}());
exports.MonanDonhang = MonanDonhang;
