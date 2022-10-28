"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Danhmuc = void 0;
var typeorm_1 = require("typeorm");
var Monan_1 = require("./Monan");
// @Index("PK__DANHMUC__B37508872A070492", ["maDanhMuc"], { unique: true })
var Danhmuc = /** @class */ (function () {
    function Danhmuc() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaDanhMuc", length: 5 })
    ], Danhmuc.prototype, "maDanhMuc");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "TenDanhMuc", length: 50 })
    ], Danhmuc.prototype, "tenDanhMuc");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "HinhAnh", length: 250 })
    ], Danhmuc.prototype, "hinhAnh");
    __decorate([
        typeorm_1.OneToMany(function () { return Monan_1.Monan; }, function (monan) { return monan.maDanhMuc; })
    ], Danhmuc.prototype, "monans");
    Danhmuc = __decorate([
        typeorm_1.Entity("DANHMUC", { schema: "dbo" })
    ], Danhmuc);
    return Danhmuc;
}());
exports.Danhmuc = Danhmuc;
