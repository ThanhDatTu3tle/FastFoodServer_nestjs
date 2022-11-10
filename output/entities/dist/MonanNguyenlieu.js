"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MonanNguyenlieu = void 0;
var typeorm_1 = require("typeorm");
var Nguyenlieu_1 = require("./Nguyenlieu");
var Monan_1 = require("./Monan");
// @Index("PK__MONAN_NG__FD620F109AC1E0C6", ["maMonAn", "maNguyenLieu"], {
//   unique: true,
// })
var MonanNguyenlieu = /** @class */ (function () {
    function MonanNguyenlieu() {
    }
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaMonAn", length: 10 })
    ], MonanNguyenlieu.prototype, "maMonAn");
    __decorate([
        typeorm_1.Column("nvarchar", { primary: true, name: "MaNguyenLieu", length: 10 })
    ], MonanNguyenlieu.prototype, "maNguyenLieu");
    __decorate([
        typeorm_1.Column("int", { name: "SoLuong" })
    ], MonanNguyenlieu.prototype, "soLuong");
    __decorate([
        typeorm_1.ManyToOne(function () { return Nguyenlieu_1.Nguyenlieu; }, function (nguyenlieu) { return nguyenlieu.monanNguyenlieus; }),
        typeorm_1.JoinColumn([{ name: "MaNguyenLieu", referencedColumnName: "maNguyenLieu" }])
    ], MonanNguyenlieu.prototype, "maNguyenLieu2");
    __decorate([
        typeorm_1.ManyToOne(function () { return Monan_1.Monan; }, function (monan) { return monan.monanNguyenlieus; }),
        typeorm_1.JoinColumn([{ name: "MaMonAn", referencedColumnName: "maMonAn" }])
    ], MonanNguyenlieu.prototype, "maMonAn2");
    MonanNguyenlieu = __decorate([
        typeorm_1.Entity("MONAN_NGUYENLIEU", { schema: "dbo" })
    ], MonanNguyenlieu);
    return MonanNguyenlieu;
}());
exports.MonanNguyenlieu = MonanNguyenlieu;
