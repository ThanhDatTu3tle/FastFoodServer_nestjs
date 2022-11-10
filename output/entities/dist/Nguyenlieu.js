"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Nguyenlieu = void 0;
var typeorm_1 = require("typeorm");
var MonanNguyenlieu_1 = require("./MonanNguyenlieu");
// @Index("PK__NGUYENLI__C75193551D9692B8", ["maNguyenLieu"], { unique: true })
var Nguyenlieu = /** @class */ (function () {
    function Nguyenlieu() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaNguyenLieu", length: 10 })
    ], Nguyenlieu.prototype, "maNguyenLieu");
    __decorate([
        typeorm_1.Column("nvarchar", { name: "TenNguyenLieu", length: 50 })
    ], Nguyenlieu.prototype, "tenNguyenLieu");
    __decorate([
        typeorm_1.Column("int", { name: "SoLuong" })
    ], Nguyenlieu.prototype, "soLuong");
    __decorate([
        typeorm_1.OneToMany(function () { return MonanNguyenlieu_1.MonanNguyenlieu; }, function (monanNguyenlieu) { return monanNguyenlieu.maNguyenLieu2; })
    ], Nguyenlieu.prototype, "monanNguyenlieus");
    Nguyenlieu = __decorate([
        typeorm_1.Entity("NGUYENLIEU", { schema: "dbo" })
    ], Nguyenlieu);
    return Nguyenlieu;
}());
exports.Nguyenlieu = Nguyenlieu;
