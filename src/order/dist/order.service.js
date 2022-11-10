"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.OrderService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
// import { UpdateOrderDto } from './dto/update-order.dto';
var relations_1 = require("src/relations/relations");
var Chitietdonhang_1 = require("../../output/entities/Chitietdonhang");
var Khachhang_1 = require("../../output/entities/Khachhang");
var Danhsachdiachi_1 = require("../../output/entities/Danhsachdiachi");
var OrderService = /** @class */ (function () {
    function OrderService(orderRepository, customerRepository, addressRepository) {
        this.orderRepository = orderRepository;
        this.customerRepository = customerRepository;
        this.addressRepository = addressRepository;
    }
    OrderService.prototype.create = function (createOrderDto) {
        return __awaiter(this, void 0, Promise, function () {
            var customerBody, customers, addressBody, categories, newOrder, findAndReturn, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        customerBody = createOrderDto.email;
                        return [4 /*yield*/, this.customerRepository.findOneByOrFail({
                                email: customerBody
                            })];
                    case 1:
                        customers = _a.sent();
                        addressBody = createOrderDto.maDiaChi;
                        return [4 /*yield*/, this.addressRepository.findOneByOrFail({
                                maDiaChi: addressBody
                            })];
                    case 2:
                        categories = _a.sent();
                        newOrder = this.orderRepository.create();
                        newOrder.maChiTietDonHang = createOrderDto.maChiTietDonHang;
                        newOrder.email = customers;
                        newOrder.maDiaChi = categories;
                        newOrder.gioDat = createOrderDto.gioDat;
                        newOrder.ngayDat = createOrderDto.ngayDat;
                        newOrder.thanhTien = createOrderDto.thanhTien;
                        newOrder.maGiamGia = createOrderDto.maGiamGia;
                        newOrder.trangThai = createOrderDto.trangThai;
                        return [4 /*yield*/, this.orderRepository.save(newOrder)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.orderRepository.findOneOrFail({
                                relations: relations_1.OrderRelations,
                                where: {
                                    maChiTietDonHang: newOrder.maChiTietDonHang
                                }
                            })];
                    case 4:
                        findAndReturn = _a.sent();
                        return [2 /*return*/, findAndReturn];
                    case 5:
                        err_1 = _a.sent();
                        throw err_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OrderService.prototype.getAll = function () {
        return __awaiter(this, void 0, Promise, function () {
            var getAll;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.orderRepository.find({
                            relations: relations_1.OrderRelations
                        })];
                    case 1:
                        getAll = _a.sent();
                        return [2 /*return*/, getAll];
                }
            });
        });
    };
    OrderService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(Chitietdonhang_1.Chitietdonhang)),
        __param(1, typeorm_1.InjectRepository(Khachhang_1.Khachhang)),
        __param(2, typeorm_1.InjectRepository(Danhsachdiachi_1.Danhsachdiachi))
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
