"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Ykienkhachhang = void 0;
var typeorm_1 = require("typeorm");
var Khachhang_1 = require("./Khachhang");
// @Index("PK__YKIENKHA__A84C6BFD50AB3EA9", ["maYKien"], { unique: true })
var Ykienkhachhang = /** @class */ (function () {
    function Ykienkhachhang() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaYKien", length: 10 })
    ], Ykienkhachhang.prototype, "maYKien");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "NoiDung", nullable: true, length: 250 })
    ], Ykienkhachhang.prototype, "noiDung");
    __decorate([
        typeorm_1.Column("int", { name: "DanhGia" })
    ], Ykienkhachhang.prototype, "danhGia");
    __decorate([
        typeorm_1.ManyToOne(function () { return Khachhang_1.Khachhang; }, function (khachhang) { return khachhang.ykienkhachhangs; }),
        typeorm_1.JoinColumn([{ name: "Email", referencedColumnName: "email" }])
    ], Ykienkhachhang.prototype, "email");
    Ykienkhachhang = __decorate([
        typeorm_1.Entity("YKIENKHACHHANG", { schema: "dbo" })
    ], Ykienkhachhang);
    return Ykienkhachhang;
}());
exports.Ykienkhachhang = Ykienkhachhang;
